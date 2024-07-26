
let arr = [
{
        name : "Calcimax Forte Plus Strip Of 30 Tablets",
        image : "https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1643884067.jpg",
        price : 216.40
    },
{
        name: "Supradyn Daily Multivitamin Tablets 15s",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg",
        price: 45.00
    },
{
        name: "Becozym C Forte ( Vitamin B Complex + Biotin + Vitamin C )- Strip Of 15 Tablets",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1643883399.jpg",
        price: 23.00

    },
{
        name: "Scalpe Plus  Anti Dandruff Shampoo  Bottle Of 75 Ml",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-1-1647245233.jpg",
        price: 208.00

    },
{
        name: "Arachitol Nano 60k Sugar Free Bottle Of 5ml Solution",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I35308/arachitol-nano-60k-sugar-free-bottle-of-5ml-solution-1-1651121454.jpg",
        price: 74.53

    },
{
        name: "Venusia Max Intensive Moisturizing Cream, For Dry To Very Dry Skin, Repairs & Smoothens Skin, 150g",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/180461/venusia-max-intensive-moisturizing-cream-for-dry-to-very-dry-skin-repairs-smoothens-skin-150g-2-1645786243.jpg",
        price: 388.08

    },
{
        name: "Venusia Max Intensive Moisturizing Lotion, Repairs Dry Skin, Provides Soft & Smooth Skin, 300gm",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/263100/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-300gm-2-1645786251.jpg",
        price: 439.09
    },
{
        name: "Benadon Vitamin B6 40mg Tablet 10's",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/022610/benadon-vitamin-b6-40mg-tablet-10s-2-1641398894.jpg",
        price: 24.13

    },
{
        name: "Ultra D3 Drops - Vitamin D3 For Infants Vitamin Drops Bottle Of 15 Ml",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/P26899/ultra-d3-drops-vitamin-d3-for-infants-vitamin-drops-bottle-of-15-ml-2-1641788612.jpg",
        price: 30.28
    },
{
        name: "Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1643876895.jpg",
        price: 299.50

    },
    {
        name: "Everherb Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1643879814.jpg",
        price: 299.50

    },
    {
        name: "Gnc Calcium Plus 600mg With Magnesium And Vitamin D3 - 180 Tablets",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/L69698/gnc-calcium-plus-600mg-with-magnesium-and-vitamin-d3-180-tablets-2-1644500850.jpg",
        price: 1149.00
    },
    {
        name: "Khadi Natural Amla & Reetha Hair Cleanser 210 Ml",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/N48338/khadi-natural-amla-reetha-hair-cleanser-210-ml-2-1647249401.jpg",
        price: 160.00
    },
    {
        name: "Nua Oil-free Gel Moisturizer- Pack Of 1",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/J49492/nua-oil-free-gel-moisturizer-pack-of-1-2-1644238787.jpg",
        price: 379.05
    },
    {
        name: "Maxi Zebra Toothbrush (buy 1 Get 1 Free)",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/R51885/maxi-zebra-toothbrush-buy-1-get-1-free-2-1647860372.jpg",
        price: 50.00
    },
    {
        name: "Gnc Magnesium 310 Mg - 120 Vegetarian Capsules",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/B12115/gnc-magnesium-310-mg-120-vegetarian-capsules-2-1644500848.jpg",
        price: 1199.00 
    }
]



let navbar = () => {

    return`    <div id="navbar">
    <div id="istdiv">
        <a href="index.html">
        <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png">
        </a>
        <div id="searchbar">
        <select>
        <option>Select Pincode</option>
        </select>
        <input type="text" id="text">
        <button id="searchbtn">
        <i class="fa-solid fa-magnifying-glass"></i> 
        </button>
        </div>
    </div>
    <div id="iistdiv">
        <div id="iiistdiv">
            <a href="">
                <p>Order Medicines</p>
            </a>
            <a href="">
                <p>Healthcare Products</p>
            </a>
            <a href="">
                <p>Lab Tests</p>
            </a>
            <a href="">
                <p>RTPCR</p>
            </a>
        </div>
        <div id="iiiistdiv">
            <div>
                <img src="images/of.PNG">
                <a href="">
                    <p id="offers">Offers</p>
                </a>
            </div>
            <div>
                <img src="images/login.PNG">
                <a href="signup.html">
                    <p id="login">Login/Signup</p>
                </a>
            </div>
            <div >
                <a href="cart.html" id="count1">
                <div id="count2">
                <img src="images/cart.PNG">
                <p id="cart">Cart</p>
                </div>
                <div id="countdiv">
                <p id="count"></p>
                </div>
                </a>
            </div>
        </div>
    </div>
</div>`
}

let footer = () =>{
    return `<div id="fo1">
    <img src="images/fo1.PNG">
</div>
<div id="fo2">
    <img src="images/fo2.PNG">
</div>
<div id="footer">
    <img src="images/fo3-1.PNG" id="fo3-1">
    <img src="images/fo3-2.PNG" id="fo3-2">
</div>`
}

let horlicksarr = [
    {
        name: "Horlicks Junior Health & Nutrition Drink Vanilla, 1 Kg",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/Z11343/horlicks-junior-health-nutrition-drink-vanilla-1-kg-2-1643876415.jpg",
        price : 449.10
    },
    {
        name: "Horlicks Health & Nutrition Drink, Chocolate, Carton 1 Kg",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I04917/horlicks-health-nutrition-drink-chocolate-carton-1-kg-1-1649248202.jpg",
        price : 345.80
    },
    {
        name: "Horlicks Health & Nutrition Drink Plastic Container, 2 Kg",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/Q28452/horlicks-health-nutrition-drink-plastic-container-2-kg-2-1643876801.jpg",
        price: 766.30
    },
    {
        name: "Horlicks Protein Plus Chocolate Carton, 200 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I41111/horlicks-protein-plus-chocolate-carton-200-g-1-1641788266.jpg",
        price: 270
    },
    {
        name: "Horlicks Protein Plus Vanilla Carton, 200 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I41113/horlicks-protein-plus-vanilla-carton-200-g-2-1641788139.jpg",
        price: 290
    },
    {
        name: "Horlicks Health & Nutrition Drink, Chocolate, Pouch 1 Kg",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/Y92725/horlicks-health-nutrition-drink-chocolate-pouch-1-kg-2-1641790288.jpg",
        price: 360
    },
    {
        name: "Horlicks Health & Nutrition Drink Jar, 500 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I04915/horlicks-health-nutrition-drink-jar-500-g-2-1643882490.jpg",
        price: 250
    },
    {
        name: "Horlicks Junior Health & Nutrition Drink Chocolate - 500 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/F52574/horlicks-junior-health-nutrition-drink-chocolate-500-g-2-1641970470.jpg",
        price: 299
    },
    {
        name: "Horlicks Health & Nutrition Drink Jar, 200 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I05367/horlicks-health-nutrition-drink-jar-200-g-2-1643882558.jpg",
        price: 118
    },
    {
        name: "Horlicks Health & Nutrition Drink, Chocolate, Jar 500 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/091755/horlicks-health-nutrition-drink-chocolate-jar-500-g-2-1643884239.jpg",
        price: 225
    },
    {
        name: "Horlicks Growth Plus Chocolate Nutrition Drink Refill Of 200 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I04925/horlicks-growth-plus-chocolate-nutrition-drink-refill-of-200-g-1-1641399090.jpg",
        price: 320
    },
    {
        name: "Horlicks Growth Plus Chocolate Nutrition Drink Jar Of 400 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I04910/horlicks-growth-plus-chocolate-nutrition-drink-jar-of-400-g-2-1643881858.jpg",
        price: 535
    },
    {
        name: "Horlicks Health & Nutrition Drink Jar, 1 Kg",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I04914/horlicks-health-nutrition-drink-jar-1-kg-2-1643881834.jpg",
        price: 459

    },
    {
        name: "Horlicks Diabetes Plus Vanilla 400 G Jar",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/G19410/horlicks-diabetes-plus-vanilla-400-g-jar-2-1644217380.jpg",
        price: 680
    },
    {
        name: "Horlicks Mother's Plus Vanilla Refill 200 G",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/K13540/horlicks-mothers-plus-vanilla-refill-200-g-1-1643880455.jpg",
        price: 210
    }



    
]


export {arr,navbar,footer,horlicksarr}