Jukselapp til å bruke playwright
--------------------------------

.locator() 
    – gets one or more DOM elements by selector or alias

Getting an element using Id:
    await page.locator('#id')

Getting an element using Class:
    await page.locator('.className')
    
Getting the element with a given data attribute:
    await page.locator('[attribute="value"]')

Fill a text field / input field
    await page.locator('#textBox').fill('hello')

Getting the first HTML child from parent:
    await page.locator('ul > li').first()

Getting n-th child from the parent:
    await page.locator('ul > li').nth(index)

Assertions include, but not limited to:
- - - - - 
Visible / hidden
await expect(page.locator('div')).toBeVisible()

enabled / disabled
    await expect(page.locator('btn')).toBeEnabled()

attr(name, value)
    await expect(page.locator('btn')).toHaveAttribute('href', 'https://www.google.com')

css(name, value)
    await expect(page.locator('btn')).toHaveCSS('font-size', '20px')



click() – clicks on a DOM element, chained off a yielded element
    await page.locator('.class').click()

.select() – selects an option in a <select> dropdown menu
    await page.locator('#dropDown').selectOption('bananas')

.clear() – clear the value of an input or text field
    await page.locator('#textBox').clear()