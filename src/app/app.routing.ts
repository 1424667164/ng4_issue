import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomePage } from './pages/home/home';
// import { LoginPage } from './pages/login/login';
// import { MyWorkPage } from './pages/mywork/mywork';
// import { WorksPage } from './pages/mywork/works/works';
// import { ProjectPage } from './pages/mywork/works/project';
// import { PworksPage } from './pages/mywork/works/pworks';
// import { RprocessPage } from './pages/mywork/works/rprocess';
// import { PfilesPage } from './pages/mywork/works/pfiles';

const appRoutes: Routes = [
    // {
    //     path: 'home',
    //     component: HomePage
    // },
    // {
    //     path: 'mywork',     // 我的工作
    //     component: MyWorkPage,
    //     children: [
    //         {
    //             path: 'works',  // 工作模块
    //             children: [
    //                 {
    //                     path: '',  // 工作模块
    //                     component: WorksPage
    //                 },
    //                 {
    //                     path: 'project/:id',   // 科研项目 某一个项目的基本信息
    //                     component: ProjectPage
    //                 },
    //                 {
    //                     path: 'pworks/:id',   // 科研项目 某一个项目的成果
    //                     component: PworksPage
    //                 },
    //                 {
    //                     path: 'pprocess',   // 科研项目 某一个项目的进度
    //                     component: RprocessPage
    //                 },
    //                 {
    //                     path: 'pfiles/:id',   // 科研项目 某一个项目的资料
    //                     component: PfilesPage
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        path: '**',
        redirectTo: '/home/transfer',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
