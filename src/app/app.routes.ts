import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Landing } from './pages/landing/landing';
import { RegisterUser } from './pages/register-user/register-user';
import { About } from './pages/about/about';

export const routes: Routes = [
    {
    path:'',
    redirectTo:'landing',
    pathMatch:'full'
},
{
    path:'about',
    component:About
},
{
    path:'login',
    component:Login
},
{
    path:'landing',
    component:Landing
},
{
   path:'register-user',
   component:RegisterUser
}];
