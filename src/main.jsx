import PathController from './PathController';
import MouseEventHanlder from './MouseEventHanlder';
import ToolFactory from './Tool/ToolFactory.js';
import Renderer from './Renderer';

import React from 'react';
import ReactDOM from 'react-dom';
import ToolList from './ReactTag/ToolList.jsx';
import OffsetButton from './ReactTag/OffsetButton.jsx';
init();

function init(){
	
	let svg = document.getElementById('drawing_panel'),
		pathController = new PathController(),
		renderer = new Renderer(svg, pathController);
	pathController.renderer = renderer;
	
	svg.setAttribute('width', '800');
	svg.setAttribute('height','600');


	ToolFactory.createContext(pathController);

	let mouseEvent = new MouseEventHanlder();
	mouseEvent.setListener();

	pathController.render();
	let style = {
		'display':'flex'
	};
	ReactDOM.render(
		(<div style={style}>
			<ToolList/>
			<OffsetButton>offset</OffsetButton>
		</div>
		), document.getElementById('button-list'));
}