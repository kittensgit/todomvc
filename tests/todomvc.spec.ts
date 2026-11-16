import { test, expect } from '@playwright/test';

test('Заголовок вкладки содержит "TodoMVC"', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    await expect(page).toHaveTitle(/TodoMVC/);
});
