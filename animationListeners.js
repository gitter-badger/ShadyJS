//
//  animationListeners.js
//  ShadyJS
//
//  Version 0.1
//  10/03/2013
//
//  Created by Adam Pypstra
//

function CrossBrowserTransitionEnd( ele, callback )
{
	ele.addEventListener( 'webkitTransitionEnd', callback, false ); /* Chrome & Safari */
	ele.addEventListener( 'oTransitionEnd', callback, false );      /* Opera */
	ele.addEventListener( 'transitionend', callback, false );       /* Firefox & IE */
}

function CrossBrowserRemoveTransitionEnd(ele, callback)
{
    ele.removeEventListener( 'webkitTransitionEnd', callback, false ); /* Chrome & Safari */
	ele.removeEventListener( 'oTransitionEnd', callback, false );      /* Opera */
	ele.removeEventListener( 'transitionend', callback, false );       /* Firefox & IE */
}