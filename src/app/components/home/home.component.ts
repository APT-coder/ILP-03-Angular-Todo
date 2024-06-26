import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/Todo.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, MatIconModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  todos: Todo[] = [];
  displayedColumns: string[] = ['select', 'id', 'todo', 'edit', 'delete'];
  dataSource: MatTableDataSource<Todo>;
  selection = new SelectionModel<Todo>(true, []);

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource<Todo>(this.todos);
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.http.get<any>('https://dummyjson.com/todos')
      .subscribe(data => {
        this.todos = data.todos;
        console.log(this.todos)
        this.dataSource.data = this.todos;
      });
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}