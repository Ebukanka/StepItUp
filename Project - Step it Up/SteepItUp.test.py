from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Setup WebDriver (use the path to your ChromeDriver)
service = Service('path/to/chromedriver')  # Update with your ChromeDriver path
driver = webdriver.Chrome(service=service)

# Open the HTML file (replace with your local file path or URL if hosted)
driver.get('file:///path/to/Step%20It%20Up.html')  # Update with your HTML file path

# Wait for the page to load completely
wait = WebDriverWait(driver, 10)

try:
    # Test: Search Bar
    search_input = wait.until(EC.presence_of_element_located((By.ID, "search")))
    search_input.send_keys("Nike")
    search_input.send_keys(Keys.RETURN)
    print("Search bar test passed.")
    time.sleep(2)

    # Test: Navigation Buttons
    nav_links = driver.find_elements(By.CSS_SELECTOR, "header .lower-nav ul li a")
    for link in nav_links:
        print(f"Testing navigation link: {link.text}")
        link.click()
        time.sleep(1)

    # Test: Add to Cart Buttons
    add_to_cart_buttons = driver.find_elements(By.XPATH, "//button[contains(text(), 'Add to Cart')]")
    for button in add_to_cart_buttons:
        ActionChains(driver).move_to_element(button).click(button).perform()
        print(f"Clicked button: {button.text}")
        time.sleep(1)

    # Test: Footer Links
    footer_links = driver.find_elements(By.CSS_SELECTOR, "footer .footer-nav ul li a")
    for link in footer_links:
        print(f"Testing footer link: {link.text}")
        link.click()
        time.sleep(1)

    print("All tests completed successfully.")

except Exception as e:
    print(f"Test failed: {e}")

finally:
    # Close the browser
    driver.quit()
