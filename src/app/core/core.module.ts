import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404 } from "./components/error-404/error-404.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404,
    ],
    imports: [
        RouterModule.forChild([
            { path: '**', component: Error404 }
        ]),
    ],
    exports: [
        NavBarComponent,
    ],
})
export class CoreModule {
}
