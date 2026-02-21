import { ChildrenOutletContexts, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
// import { Landing } from './pages/landing/landing';
import { RegisterUser } from './pages/register-user/register-user';
import { About } from './pages/about/about';
import { Layout } from './pages/layout/layout';
import { Component, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { ParkingSpace } from './pages/parking-space/parking-space';
import { OwnerListings } from './pages/owner-listings/owner-listings';
import { SearchSpaces } from './pages/search-spaces/search-spaces';
import { ParkingSpaceDetails } from './pages/parking-space-details/parking-space-details';

export const routes: Routes =
    [{
        path: '',
        component: Layout,
        children: [

            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            { 
                path:'home',
                component:Home
            },

            {
                path: 'About',
                component: About
            },
            {
                path: 'login',
                component: Login
            },

            {
                path: 'register-user',
                component: RegisterUser
            },
            {
                path:'park-space',
                component:ParkingSpace
            },
            {
                path:'owner-listings',
                component:OwnerListings
            },
            {
                path:'find-parking',
                component:SearchSpaces
            },{
                path:'parking-space-details',
                component:ParkingSpaceDetails
            }
        ]
    }
    ];

