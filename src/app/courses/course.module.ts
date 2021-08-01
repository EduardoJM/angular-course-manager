import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/components/star/star.module";
import { ReplaceModule } from "../shared/pipes/replace/replace.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StarModule,
        ReplaceModule,
        RouterModule.forChild([
            { path: 'courses', component: CourseListComponent },
            { path: 'courses/info/:id', component: CourseInfoComponent },
        ]),
    ],
})
export class CourseModule {

}
