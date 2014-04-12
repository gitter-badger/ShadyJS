//
//  animationListeners.js
//  ShadyJS
//
//  Version 0.2
//  10/03/2013
//
//  Created by Adam Pypstra
//

function CrossBrowserTransitionEnd(ele, callback)
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

function CrossBrowserTransitionEndOnce(ele, callback)
{
	var cb = function()
	{
		callback();
		CrossCrossBrowserRemoveTransitionEnd(ele, cb);
	}

	CrossBrowserTransitionEnd(ele, callback);
}


/**
 * Changelog
 *
 * @version 0.1	@date 10/03/2013	- Initial setup
 * @version 0.2	@date 13/03/2013	- Added function to only execute the transition once
 */
