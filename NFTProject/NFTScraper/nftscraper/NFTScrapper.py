import json
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager


root_address = 'https://coinmarketcap.com/nft/collection'

# Set up Selenium
options = Options()
options.add_argument('--headless')  # run in background
options.add_argument('--disable-gpu')
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

def scrape_nfts(data):
    print('Scraping NFTs...')

    for page_number in range(1, 10):
        url = f"{root_address}/?page={page_number}"
        driver.get(url)
        time.sleep(3)  # Allow time for JS to load

        soup = BeautifulSoup(driver.page_source, 'html.parser')
        rows = soup.select('tbody tr')

        for row in rows:
            columns = row.find_all('td')
            if len(columns) < 10:
                continue

            d = {}
            try:
                d['rank'] = columns[0].get_text(strip=True)
                img_tag = columns[1].find('img')
                d['img'] = img_tag['src'] if img_tag else ''
                name = columns[1].find('div',class_='LongTextDisplay_content-wrapper__2ho_9')
                d['name'] = name.get_text(strip=True)
                volume = columns[3].find('span',class_='sc-65e7f566-0 cMQTbZ base-text')
                d['volume'] = volume.get_text(strip=True)
                d['market-cap'] = columns[4].get_text(strip=True) if columns[4].get_text(strip=True) != '--' else '-'
                d['floor price'] = columns[5].get_text(strip=True)
                avg_price = columns[6].find('span',class_='sc-65e7f566-0 cMQTbZ base-text')
                d['avg_price'] = avg_price.get_text(strip=True)
                sales = columns[7].find('span',class_='sc-65e7f566-0 cMQTbZ base-text')
                d['sales'] = sales.get_text(strip=True)
                d['asserts'] = columns[8].get_text(strip=True)
                d['owners'] = columns[9].get_text(strip=True)
                d['owners_percent'] = columns[10].get_text(strip=True)
                data.append(d)
            except Exception as e:
                print(f"Error parsing row: {e}")

    return data

def save_json(data):
    with open('NFTs.json', 'w') as f:
        json.dump(data, f, indent=2)

def open_json():
    with open('NFTs.json', 'r') as f:
        return json.load(f)

def main():
    data = []
    data = scrape_nfts(data)
    save_json(data)
    print('done')

if __name__ == '__main__':
    main()
    driver.quit()
