'use strict';

if ( typeof Object.assign != 'function' ) {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign( target, varArgs ) { // .length of function is 2

      if ( target == null ) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for ( var index = 1; index < arguments.length; index++ ) {
        var nextSource = arguments[index];

        if ( nextSource != null ) { // Skip over if undefined or null
          for ( var nextKey in nextSource ) {
            // Avoid bugs when hasOwnProperty is shadowed
            if ( Object.prototype.hasOwnProperty.call(nextSource, nextKey) ) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

if ( Element && !Element.prototype.matches ) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector ||
    proto.mozMatchesSelector || proto.msMatchesSelector ||
    proto.oMatchesSelector || proto.webkitMatchesSelector;
}

// add utilities
var util = {
  keyCodes: {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    HOME: 36,
    END: 35,
    ENTER: 13,
    SPACE: 32,
    DELETE: 46,
    TAB: 9
  },

  generateID: function ( base ) {
    return base;
  },

  getDirectChildren: function ( elm, selector ) {
    return Array.prototype.filter.call(elm.children, function ( child ) {
      return child.matches(selector);
    });
  }
};

(function ( w, doc, undefined ) {
  /**
   * ARIA Tabbed Interface
   * Creates a tab list to toggle the visibility of
   * different subsections of a document.
   *
   * Author: Scott O'Hara
   * Version: 2.1.2
   * License: https://github.com/scottaohara/a11y_tab_widget/blob/master/LICENSE
   */
  var ARIAtabsOptions = {
    baseID: 'demo',
    defaultTabLabel: 'Tab ',
    elClass: 'atabs',
    customTabClassAttribute: 'data-atabs-tab-class',
    tabLabelAttribute: 'data-atabs-tab-label',
    headingAttribute: 'data-atabs-heading',
    defaultOrientation: 'horizontal',
    orientationAttribute: 'data-atabs-orientation',
    panelWrapper: 'data-atabs-panel-wrap',
    panelClass: 'atabs__panel',
    panelSelector: '[data-atabs-panel]',
    tabClass: 'atabs__list__tab',
    tabListClass: 'atabs__list',
    tablistSelector: '[data-atabs-list]',
    manualAttribute: 'data-atabs-manual',
    manual: false
  };


  var ARIAtabs = function ( inst, options ) {
    var _options = Object.assign(ARIAtabsOptions, options);
    var orientation = _options.defaultOrientation;
    var _tabListContainer;
    var _tabs = [];
    var activeIndex = 0;
    var defaultPanel = 0;
    var selectedTab = activeIndex;
    var el = inst;
    var hasPanelWrapper = el.querySelector('[' + _options.panelWrapper + ']');
    var elID;
    var headingSelector = '[' + _options.headingAttribute + ']';

    var init = function () {
      elID = el.id || util.generateID(_options.baseID);

      if ( el.getAttribute(_options.orientationAttribute) === 'vertical' ) {
        orientation = 'vertical';
      }

      if ( el.hasAttribute(_options.manualAttribute) ) {
        _options.manual = true;
      }

      el.classList.add(_options.elClass);

      // find or create the tabList
      _tabListContainer = generateTablistContainer();

      // create the tabs and setup the panels
      buildTabs.call( this );

      // If there's a table of contents for no-js sections,
      // that won't be needed anymore. Remove it.
      deleteTOC();

      if ( activeIndex > -1 ) {
        activateTab();
      }
    }; // init()


    var generateTablistContainer = function () {
      var tabListContainer = el.querySelector(_options.tablistSelector) || doc.createElement('div');
      tabListContainer.setAttribute('role', 'tablist');
      tabListContainer.classList.add(_options.tabListClass);
      tabListContainer.id = elID + '-tab-list';
      tabListContainer.innerHTML = ''; // clear out anything that shouldn't be there
      if ( orientation === 'vertical' ) {
        tabListContainer.setAttribute('aria-orientation', orientation);
      }
      el.insertBefore(tabListContainer, el.querySelector(':first-child'));

      return tabListContainer;
    }; // generateTablistContainer()


    this.addTab = function ( panel, label, customClass ) {
      var customClass = customClass || panel.getAttribute(_options.customTabClassAttribute);

      var generateTab = function ( index, id, tabPanel, customClass ) {
        var newTab = doc.createElement('button');
        newTab.id = elID + '-tab-' + index;
        newTab.tabIndex = -1;
        newTab.setAttribute('role', 'tab');
        newTab.setAttribute('aria-selected', activeIndex === index);
        if ( activeIndex === index ) {
          newTab.setAttribute('aria-controls', id);
        }
        newTab.setAttribute('data-controls', id);
        newTab.innerHTML = tabPanel;
        newTab.classList.add(_options.tabClass);
        if ( customClass ) {
          newTab.classList.add(customClass);
        }

        newTab.addEventListener('click', function () {
          onClick.call( this, index );
          this.focus();
        }, false);

        newTab.addEventListener('keydown', tabElementPress.bind(this), false);
        newTab.addEventListener('focus', function () {
          checkYoSelf.call( this, index );
        }, false);

        return newTab;
      };

      var newPanel = panel;
      var i = _tabs.length;

      if ( !newPanel ) {
        return;
      }

      var panelHeading = newPanel.querySelector(headingSelector);
      var finalLabel = [
            label,
            newPanel.getAttribute(_options.tabLabelAttribute),
            panelHeading && panelHeading.textContent,
            _options.defaultTabLabel + (i + 1)
          ]
          .filter( function ( l ) {
            return l && l !== '';
          })[0];

      var newId = newPanel.id || elID + '_panel_' + i;
      var t = generateTab(i, newId, finalLabel, customClass);

      _tabListContainer.appendChild(t);
      newPanel.id = newId;
      newPanel.setAttribute('role', 'tabpanel');
      newPanel.setAttribute('aria-labelledby', elID + '_tab_' + i);
      newPanel.classList.add(_options.panelClass);
      newPanel.hidden = true;

      if ( !el.contains(panel) ) {
        el.appendChild(panel);
      }

      if ( defaultPanel === 0 && newPanel.getAttribute('data-atabs-panel') === 'default' ) {
        activeIndex = i;
        defaultPanel = activeIndex;
      }

      if ( panelHeading ) {
        if ( panelHeading.getAttribute(_options.headingAttribute) !== 'keep' ) {
          panelHeading.parentNode.removeChild(panelHeading);
        }
      }

      newPanel.addEventListener('keydown', panelElementPress.bind(this), false);
      newPanel.addEventListener('blur', removePanelTabindex, false);

      _tabs.push({
        tab: t,
        panel: newPanel
      });
    }; // this.addTab


    var buildTabs = function () {
      var tabs;

      /**
       * Typically tab panels should be direct children of the main tab widget
       * wrapper.  This is necessary so that the script can appropriately associate
       * each tablist with the appropriate tabpanels, allowing for nested tab widgets.
       *
       * If a wrapper for the tabpanels is necessary, for styling/other reasons, then
       * this if statement will look to see if the appropriate panel wrapper div is in
       * place, and if so, adjust the element used to look for the direct children.
       */
      if ( hasPanelWrapper ) {
        tabs = util.getDirectChildren(hasPanelWrapper, _options.panelSelector);
      }
      else {
        tabs = util.getDirectChildren(el, _options.panelSelector);
      }


      for ( var i = 0; i < tabs.length; i++ ) {
        this.addTab(tabs[i]);
      }
    }; // buildTabs()


    var deleteTOC = function () {
      if ( el.getAttribute('data-atabs-toc') ) {
        var toc = doc.getElementById(el.getAttribute('data-atabs-toc'));
        // safety check to make sure a TOC isn't set to be deleted
        // after it's already deleted. e.g. if there are two
        // dat-atabs-toc that equal the same ID.
        if ( toc ) {
          toc.parentNode.removeChild(toc);
        }
      }
    }; // deleteTOC()


    var incrementActiveIndex = function () {
      if ( activeIndex < _tabs.length - 1 ) {
        return ++activeIndex;
      }
      else {
        activeIndex = 0;
        return activeIndex;
      }
    }; // incrementActiveIndex()


    var decrementActiveIndex = function () {
      if ( activeIndex > 0 ) {
        return --activeIndex;
      }
      else {
        activeIndex = _tabs.length - 1;
        return activeIndex;
      }
    }; // decrementActiveIndex()


    var focusActiveTab = function () {
      _tabs[activeIndex].tab.focus();
    }; // focusActiveTab()


    var onClick = function ( index ) {
      activeIndex = index;
      activateTab();
    }; // onClick()


    var moveBack = function ( e ) {
      e.preventDefault();
      decrementActiveIndex();
      focusActiveTab();

      if ( !_options.manual ) {
        activateTab();
      }
    }; // moveBack()


    var moveNext = function ( e ) {
      e.preventDefault();
      incrementActiveIndex();
      focusActiveTab();

      if ( !_options.manual ) {
        activateTab();
      }
    }; // moveNext()


    /**
     * A tabpanel is focusable upon hitting the TAB key
     * from a tab within a tablist.  When navigating away
     * from the tabpanel, with the TAB key, remove the
     * tabindex from the tabpanel.
     */
    var panelElementPress = function ( e ) {
      var keyCode = e.keyCode || e.which;

      switch ( keyCode ) {
        case util.keyCodes.TAB:
          removePanelTabindex();
          break;

        default:
          break;
      }
    }; // panelElementPress()


    var removePanelTabindex = function () {
      _tabs[activeIndex].panel.removeAttribute('tabindex');
    }; // removePanelTabindex()


    var tabElementPress = function ( e ) {
      var keyCode = e.keyCode || e.which;

      switch ( keyCode ) {
        case util.keyCodes.TAB:
          _tabs[selectedTab].panel.tabIndex = 0;
          activeIndex = selectedTab;
          break;

        case util.keyCodes.ENTER:
        case util.keyCodes.SPACE:
          e.preventDefault();
          activateTab();
          break;

        case util.keyCodes.LEFT:
        case util.keyCodes.UP:
          moveBack( e );
          break;

        case util.keyCodes.RIGHT:
        case util.keyCodes.DOWN:
          moveNext( e );
          break;

        case util.keyCodes.END:
          e.preventDefault();
          activeIndex = _tabs.length - 1;
          focusActiveTab();
          if ( !_options.manual ) {
            activateTab();
          }
          break;

        case util.keyCodes.HOME:
          e.preventDefault();
          activeIndex = 0;
          focusActiveTab();
          if ( !_options.manual ) {
            activateTab();
          }
          break;

        case util.keyCodes.DELETE:
          if ( _tabs.length > 1 && canRemove ) {
            e.preventDefault();
            removeTabAndPanel(activeIndex);
            focusActiveTab();
          }
          break;

        default:
          break;
      }
    }; // tabElementPress()


    /**
     * This function shouldn't exist.  BUT for...
     * https://github.com/nvaccess/nvda/issues/8906
     * https://github.com/FreedomScientific/VFO-standards-support/issues/132
     *
     * Note this doesn't completely fix JAWS announcements.
     * With this function, focus will be placed on the correct Tab,
     * but JAWS will make no announcement until the user begins
     * re-navigating with arrow keys.
     *
     * The alternative is not using this, having JAWS announce the
     * inactive tag (which will receive focus), JAWS will announce
     * to use the Space key to activate, but nothing will happen.
     */
    var checkYoSelf = function ( index ) {
      if ( index !== activeIndex ) {
        focusActiveTab();
      }
    }; // checkYoSelf()


    var deactivateTabs = function () {
      for ( var i = 0; i < _tabs.length; i++ ) {
        deactivateTab(i);
      }
    }; // deactivateTabs()


    var deactivateTab = function ( idx ) {
      _tabs[idx].panel.hidden = true;
      _tabs[idx].tab.tabIndex = -1;
      _tabs[idx].tab.setAttribute('aria-selected', false);
      _tabs[idx].tab.removeAttribute('aria-controls');
      // remove the aria-controls from inactive tabs since
      // a user can *not* move to their associated element
      // if that element is not displayed.
    }; // deactivateTab()


    /**
     * Update the active Tab and make it focusable.
     * Deactivate any previously active Tab.
     * Reveal active Panel.
     */
    var activateTab = function () {
      var active = _tabs[activeIndex];
      deactivateTabs();
      active.tab.setAttribute('aria-controls', active.tab.getAttribute('data-controls'))
      active.tab.setAttribute('aria-selected', true);
      active.tab.tabIndex = 0;
      active.panel.hidden = false;
      selectedTab = activeIndex;
      return selectedTab;
    }; // activateTab()


    init.call( this );
    return this;
  }; // ARIAtabs()


  w.ARIAtabs = ARIAtabs;
})( window, document );


var widget = '.tabs';
var els = document.querySelectorAll(widget);

// Generate all Tab Widget instances
for ( var i = 0; i < els.length; i++ ) {
  var nTabs = new ARIAtabs( els[i], {tabListClass: 'tabs-nav'}, { tabClass: 'tab-item'});
}

