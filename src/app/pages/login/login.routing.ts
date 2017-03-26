import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login';

const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginPage
    }
];

export const loginRoutingProviders: any[] = [];
export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);
