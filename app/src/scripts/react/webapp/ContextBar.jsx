// Context Bar
// ===============
// Part of the main webapp's window chrome. Positioned on the right side of the
// page, this bar shows user-customizable content including graphs, logged in
// users, and other widgets.

"use strict";

import React from "react";

import EventBus from "../../utility/EventBus";

import DashboardContext from "../../react/views/Dashboard/DashboardContext";

const ContextBar = React.createClass(

  { displayName: "Context Sidebar"

  , componentWillMount () {
    EventBus.on( "showContextPanel", this.showContext );
    EventBus.on( "updateContextPanel", this.updateContext );
    EventBus.on( "hideContextPanel", this.hideContext );
  }

  , componentWillUnmount () {
    EventBus.removeListener( "showContextPanel", this.showContext );
    EventBus.removeListener( "updateContextPanel", this.updateContext );
    EventBus.removeListener( "hideContextPanel", this.hideContext );
  }

  , getInitialState () {
    return { activeComponent: DashboardContext
           , activeProps: {}
           , lastComponent: null
           , lastProps: {}
           };
  }

  , componentDidUpdate: function(prevProps, prevState) {
    }

  , showContext ( reactElement, props ) {
    if ( reactElement.displayName ) {
      this.setState(
        { activeComponent: reactElement
        , activeProps: props
        , lastComponent: this.state.activeComponent
        , lastProps: this.state.activeProps
        }
      );
    } else {
      console.warn( "Invalid React element passed to " + this.displayName );
      console.dir( reactElement );
    }
  }

  , updateContext ( reactElement, props ) {
      if ( this.state.activeComponent
        && this.state.activeComponent.displayName === reactElement.displayName ) {
        this.setState(
          { activeProps: props
          }
        );
      }
    }

  , hideContext ( reactElement ) {
      if ( this.state.activeComponent
        && this.state.activeComponent.displayName === reactElement.displayName ) {
        this.setState(
          { activeComponent : this.state.lastComponent
          , activeProps: this.state.lastProps
          , lastComponent: null
          , lastProps: {}
          }
        );
      }
    }

  , render () {
    let asideClass = [ "app-sidebar" ];
    let activeComponent = null;

    if ( this.state.activeComponent ) {
      activeComponent = (
        <this.state.activeComponent { ...this.state.activeProps } />
      );
    }

    asideClass.push( this.state.activeComponent
                   ? "context-bar-active"
                   : "context-bar-inactive"
                   );

    return (
      <aside
        className = { asideClass.join( " " ) }
      >
        { activeComponent }
      </aside>
    );
  }
});

export default ContextBar;
