# EMD Precious Metals Calculator

This application is built using React, Redux and Vite as the build tool. The app fetches current spot metals prices for gold, platinum and silver in troy ounces and the visitor can calculate the market price of scrap jewelry metal by inputting the weight in grams, metal type and metal quality into a form. The visitor can also upload, resize and crop an image for each item they are calculating the market value for. The data can be saved to the browser's local storage and the visitor can print a perfectly laid out pdf of their data.

The app was originally built with express and javascript for personal use, then later merged into a larger MERN stack application; again for personal use.
This represents the latest version as a publicly available stand-alone app powered by Vite with Typescript for type safety.

## How to use the App

Input the weight of the scrap metal in grams, select the metal type, and select the metal quality.

- [x] *Click* on `Update metal prices` to fetch current prices from API, courtesy of [Metals-API.com](https://www.metals-api.com/)
- [x] Once spot prices appear, you are ready to enter data.
- [x] The `buyer spread` plus/minus toggles are set to a default value of 10%. You can change this to whatever you wish. This represents the buyer's take as a percentage of net value.
- [x] *Select* `Metal` type from the dropdown. Options include (Gold, Silver and Platinum)
- [x] Next Select metal `Quality` from the dropdown. Options that appear will be based on the metal you selected.
- [x] For example; gold options are in karat (i.e. 14k) while silver includes fine (99.9%) and sterling (92.5%)
- [x] Finally, enter the numerical value of your item's weight in grams in the provided text input element. 'Calculate' and 'Clear' buttons will display once you've entered your item's weight.
- [x] Once you've *clicked* `Calculate`, a results section will appear along with a toolbar where you can save your data to local storage, print data to your printer or save it to pdf as well as a button to upload, size, crop and change image format.
- [x] Each result item will display an image upload element where you can upload an image for that item.

[sample printable price sheet](/frontend/src/globals/images/sample-metals-price-sheet.pdf)

![Mobile 1](/frontend/src/globals/images/mobile-1.png "Mobile 1")

![Mobile 2](/frontend/src/globals/images/mobile-2.png "Mobile 2")

## Knowledge

### Example - Calculating the value of a gold ring

To calculate the scrap gold price of a ring that is **`12.3 grams`** of **`14k gold`**, we first need to convert the weight of the gold from grams to troy ounces (ozt). One troy ounce is equal to **`31.1034768 grams`**.

To convert **`12.3 grams`** to troy ounces, we can use the following formula:

    Wsg = scrap weight in grams (12.3 grams)
    Wst = scrap weight in troy ounces

$$ Wst = { Wsg \over 31.1034768 } $$

    Total Weight of scrap gold (ozt): 12.3 grams / 31.1034768 = 0.3947 troy ounces

We now have the converted scrap weight in troy ounces. However, we don't have the actual weight of pure gold since 14k represents a percentage of gold alloyed with other metals, such as nickel or copper.

14k is a quality indicator often used in gold jewelry where 24k represents pure gold at ***`~99.99%`*** gold.
 Therefore, we can determine the percentage of pure gold in the ring with the following formula:

    k = numerical karat in gold quality (14)
    kr = quality ratio

$$ kr = { k \over 24 } $$

    ratio gold in scrap: 14 / 24 = .58333 or 58.333%

 We can use the following formula to determine the weight of pure gold in the ring:

    Wpt = Weight of pure gold in scrap in troy ounces

$$ Wpt = kr \times Wst $$

    Weight of pure gold in scrap: 0.585 x 0.3947 = 0.2308 troy ounces

Finally, to calculate the scrap gold price of the ring, we multiply the weight of pure gold by the current market price of gold. Using a fictional market price of ***`$1,923.34`*** per troy ounce for gold, we can use the following formula:

    Gs = Gold spot price per troy ounce in USD
    Vn = Net scrap value in USD

$$ Vn = Wpt \times Gs $$

    Net Value of Scrap Gold: 0.2308 troy ounces x $1,923.34 = $439.68

#### Final Step

Using the math above, we determined that the market value for the scrap gold is **$439.68**. However, to convert your scrap piece into cash, you will need to sell it to a precious metals dealer or jeweler. Keep in mind that a metals dealer's goal is to make a profit, so they will charge a fee or "spread" - often represented as a percentage of the metal's value. To get the best deal, it's important to research and find a buyer who offers a reasonable spread and accurately assesses the quality and weight of your metal. By entering your expected spread, you can estimate what you can expect to receive for your scrap gold before visiting a buyer.

## Requirements

- Node.js version 16 or higher
- npm version 6 or higher

## Installation

To install the project dependencies, run the following command in the project root directory:

```html
npm install
```

## Running the project

To run the project in development mode, use the following command:

```cl
npm start
```

This will start a local development server on port 3000. You can access the application by navigating to [http://localhost:3000](http://localhost:3000) in your browser.

## Building for production

To build the project for production, use the following command:

```cl
npm run build
```

This will create a production-ready build of the project in the `build` directory.

## Contributing

We welcome contributions to the project. If you would like to contribute, please follow our [contribution guidelines](http://localhost:3000).

## License

The project is licensed under the [BSD 3-Clause License](../LICENSE) License.

## Contact

If you have any questions or issues, please contact us at email@example.com
