import { RouterModule, Route } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';

const routes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'view', component: ViewComponent },
    { path: 'add',  component: AddComponent, canActivate: [AuthGuard], canDeactivate: [AuthGuard] },
    { path: 'add/:id', component: AddComponent, canActivate: [AuthGuard] } 
]

export const RoutesProvider = RouterModule.forRoot(routes);