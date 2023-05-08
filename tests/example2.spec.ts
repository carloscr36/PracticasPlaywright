import { test, expect, type Page } from '@playwright/test'
import todoItems from './mocks/todoItems.mock'

test.beforeEach(async ({ page }) => {
    await page.goto('/todomvc')
});

test.describe('TODO app', () => {
    test('should be able to add a new item', async ({ page }) => {
        const newTodo = page.getByPlaceholder('What needs to be done?')
        await newTodo.fill(todoItems[0])
        await newTodo.press('Enter')
        await expect(page.getByTestId('todo-title')).toHaveText(todoItems[0])
    })
    test('should append the last items added to the bottom of the list', async ({
        page,
    }) => {
        const newTodo = page.getByPlaceholder('What needs to be done?')
        await newTodo.fill(todoItems[0])
        await newTodo.press('Enter')
        await newTodo.fill(todoItems[1])
        await newTodo.press('Enter')
        await expect(page.getByTestId('todo-item').nth(1)).toHaveText(todoItems[1])
    });
});
