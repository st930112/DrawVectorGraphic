import SelectTool from './SelectTool';
import DrawTool from './DrawTool';
import GroupTool from './GroupTool';
let singleton = Symbol();

export default class ToolFactory{
	constructor(delegate){
		this.tools = {
			'pen':new DrawTool(delegate),
			'select':new SelectTool(delegate),
			'group': new GroupTool(delegate)
		};
		this.tool = this.tools['select'];
	}
	static createContext(delegate){
		this[singleton] = new ToolFactory(delegate);
	}

	static getContext(){
		return this[singleton];
	}

	switchTool(str){
		this.tool.switch();
		this.tool = this.tools[str];
		this.tool.mount();
	}
}