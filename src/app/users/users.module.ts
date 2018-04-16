import { NgModule } from "@angular/core";

import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";



@NgModule({
    imports: [
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            { path: 'register', component: RegisterComponent, },
            { path: 'sign-in', component: SignInComponent, },
        ])
    ],
    declarations: [RegisterComponent, SignInComponent],
    exports: [],
    providers: []
})

export class UsersModule { };