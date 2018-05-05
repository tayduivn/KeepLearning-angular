import { RouterModule, Routes } from "@angular/router";

import { PreloadingStrategy, PreloadAllModules } from "@angular/router";
import { MainComponent } from "./main/main.component";

const app_routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'courses', loadChildren: './cursos/cursos.module#CursosModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes, {preloadingStrategy: PreloadAllModules})