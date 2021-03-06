import {View, Component} from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { TemplateFormComponent } from './template-form.component';
import { ModelFormComponent } from './model-form.component'

@Component({ selector: 'app' })
@View({
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/',              as: 'templateForm',  component: TemplateFormComponent },
  { path: '/modelForm',     as: 'modelForm',     component: ModelFormComponent    }
])
export class AppComponent { }
