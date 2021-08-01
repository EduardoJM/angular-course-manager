import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
    course: Course | undefined = undefined;

    constructor(
        private activatedRoute: ActivatedRoute,
        private courseService: CourseService,
    ) {
    }

    ngOnInit(): void {
        const courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.retrieveById(courseId);
    }

    retrieveById(id: number) {
        this.courseService.retrieveById(id).subscribe({
            next: (course) => this.course = course,
            error: (err) => console.log(err),
        });
    }

    save(): void {
        if (!this.course) {
            return;
        }
        this.courseService.save(this.course).subscribe({
            next: (course) => this.course = course,
            error: (err) => console.log('err'),
        });
    }
}
