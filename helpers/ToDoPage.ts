import { expect, Locator, Page } from '@playwright/test';

export class ToDoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly toggleAllCheckbox: Locator;
  readonly clearCompletedButton: Locator;
  readonly filters: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.locator('.todo-list li');
    this.toggleAllCheckbox = page.locator('.toggle-all');
    this.clearCompletedButton = page.getByText('Clear completed');
    this.filters = page.locator('.filters a');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async addTodos(texts: string[]) {
    for (const text of texts) {
      await this.addTodo(text);
    }
  }

  async toggleTodoByIndex(index: number) {
    const checkbox = this.todoItems.nth(index).locator('.toggle');
    await checkbox.click();
  }

  async deleteTodoByIndex(index: number) {
    const todo = this.todoItems.nth(index);
    await todo.hover();
    await todo.locator('.destroy').click();
  }

  async editTodoByIndex(index: number, newText: string) {
    const todo = this.todoItems.nth(index);
    await todo.dblclick();
    const editInput = todo.locator('.edit');
    await editInput.fill(newText);
    await editInput.press('Enter');
  }

  async filterBy(option: 'All' | 'Active' | 'Completed') {
    await this.page.getByRole('link', { name: option }).click();
  }

  async expectTodoCount(expected: number) {
    await expect(this.todoItems).toHaveCount(expected);
  }

  async expectTodoText(index: number, expectedText: string) {
    const label = this.todoItems.nth(index).locator('label');
    await expect(label).toHaveText(expectedText);
  }

  async clearCompleted() {
    if (await this.clearCompletedButton.isVisible()) {
      await this.clearCompletedButton.click();
    }
  }

  async toggleAll() {
    await this.toggleAllCheckbox.check();
  }

  async uncheckAll() {
    await this.toggleAllCheckbox.uncheck();
  }

  async toggleAllTodos() {
    const toggleAll = this.page.locator('.toggle-all');
    await toggleAll.click();
  }

  async expectAllTodosCompleted(expected: number){
    const completedTodos = this.page.locator('.todo-list li.completed');
    await expect(completedTodos).toHaveCount(expected);
  }
}