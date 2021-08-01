import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string = '';

    constructor(private courseService: CourseService) { }

    ngOnInit() : void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: (courses) => {
                this._courses = courses;
                this.filteredCourses = courses;
            },
            error: (err) => console.log(err),
        });
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                this.retrieveAll();
            },
            error: (err) => console.log(err),
        });
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses
            .filter((course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) !== -1)
    }

    get filter() : string {
        return this._filterBy;
    }
}