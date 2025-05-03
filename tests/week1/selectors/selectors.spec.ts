import { test, expect } from '@playwright/test';
import { ToDoPage } from '../../../helpers/ToDoPage'

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/')
})

test('User can add and complete a todo', async ({ page }) => {
  const todoPage = new ToDoPage(page)

  await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible()

  await todoPage.addTodo('Study Playwright')
  await todoPage.expectTodoText(0, 'Study Playwright')
  await todoPage.expectTodoCount(1)
  await todoPage.toggleTodoByIndex(0)
});

test('Add multiple todos', async ({ page }) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Wake up at 5:00AM', 'Take a shower', 'Practice Yoga'])

  await todoPage.expectTodoCount(3)
  await todoPage.expectTodoText(0, 'Wake up at 5:00AM')
  await todoPage.expectTodoText(1, 'Take a shower')
  await todoPage.expectTodoText(2, 'Practice Yoga')
}); 

test('Mark all todos as completed', async ({ page }) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Go to the gym', 'Read a book'])
  await todoPage.toggleAllTodos()
  await todoPage.expectTodoCount(2)
});

test('Delete a todo', async ({ page }) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Item 1', 'Item 2'])
  await todoPage.deleteTodoByIndex(1)
  await todoPage.expectTodoCount(1)
  await todoPage.expectTodoText(0, 'Item 1')
});

test('Edit a todo', async ({ page }) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Item 1', 'Item 2']) //add two items
  await todoPage.editTodoByIndex(0, 'Updated Item 1') //edit the first item
  await todoPage.expectTodoText(0, 'Updated Item 1') //check if the first item is updated
});

test('Filter by Active', async({ page }) =>{
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Run', 'Walk'])
  await todoPage.toggleTodoByIndex(0) //mark Run as completed

  await todoPage.filterBy('Active')
  await todoPage.expectTodoCount(1)
  await todoPage.expectTodoText(0, 'Walk')
})

test('Filter by Completed', async({ page }) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Read a book', 'Listen to Music'])
  await todoPage.toggleTodoByIndex(1) //completing Listen to Music

  await todoPage.filterBy('Completed')
  await todoPage.expectTodoCount(1)
  await todoPage.expectTodoText(0, 'Listen to Music')
})

test('Filter by All', async({page}) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Read', 'Run', 'Sleep & Repeat'])
  await todoPage.toggleTodoByIndex(1)
  await todoPage.toggleTodoByIndex(2)

  await todoPage.filterBy('All')
  await todoPage.expectTodoCount(3)
})

test('Clear completed todos', async({page}) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Clean the room', 'Record a podcast'])
  await todoPage.expectTodoCount(2)
  await todoPage.toggleAll()

  await todoPage.clearCompleted()
  await todoPage.expectTodoCount(0)
})

test('User can check all todos at once', async({page}) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Clean the room', 'Record a podcast'])
  await todoPage.expectTodoCount(2)
  await todoPage.toggleAll()
  await todoPage.expectAllTodosCompleted(2)
})

test('User can uncheck all todos at once (mark as active)', async({page}) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Clean the room', 'Record a podcast'])
  await todoPage.expectTodoCount(2)
  await todoPage.uncheckAll()
  await todoPage.expectAllTodosCompleted(0)
})

test('Todos persist after hard refresh', async({page}) => {
  const todoPage = new ToDoPage(page)

  await todoPage.addTodos(['Clean the room', 'Record a podcast'])
  await todoPage.toggleTodoByIndex(0)

  await page.reload();

  await todoPage.expectTodoCount(2)
  await todoPage.expectTodoText(0, 'Clean the room')
  await todoPage.expectTodoText(1, 'Record a podcast')
})



