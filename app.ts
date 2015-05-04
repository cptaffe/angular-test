
/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
	selector: 'test-app'
})

@View({
	template: '<h2>Hello {{ name }}</h2>'
})

// Component controller
class NameComponent {
	name: string;
	constructor() {
		this.name = 'Connor';
	}
}

bootstrap(NameComponent);
