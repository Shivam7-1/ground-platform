/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AuthService } from './../../services/auth/auth.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InlineEditorModule } from './../inline-editor/inline-editor.module';
import { ProjectHeaderComponent } from './project-header.component';
import { ProjectService } from './../../services/project/project.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { UserProfilePopupComponent } from '../user-profile-popup/user-profile-popup.component';
import { NEVER, Subject } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

describe('ProjectHeaderComponent', () => {
  let component: ProjectHeaderComponent;
  let fixture: ComponentFixture<ProjectHeaderComponent>;
  const dialogRef: Partial<MatDialogRef<UserProfilePopupComponent>> = {};
  const user$ = new Subject<User | null>();

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [InlineEditorModule, MatIconModule, MatDialogModule],
        declarations: [ProjectHeaderComponent],
        providers: [
          { provide: AuthService, useValue: { user$, getUser$: () => user$ } },
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: dialogRef },
          {
            provide: ProjectService,
            useValue: {
              getActiveProject$: () => NEVER,
              getCurrentProject: () => {},
            },
          },
          { provide: Router, useValue: {} },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
