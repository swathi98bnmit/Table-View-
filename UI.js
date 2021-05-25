class UI {

    //#region Modal Menu Static Method
    
    static modalMenu(){
      
        const modal = document.createElement('div');
        modal.setAttribute("id", "modalMenu");
        modal.classList.add("modal");
        modal.style.cssText = `
            padding: 0;
            display: block;
            position: fixed;
            z-index: 100000;
            right: 599px;
            top: 120px;
            left: 200px;
            width: 60%;
            height:500px;
            border-style: solid;
            border-color: lightgray;
            border-width: 1px;
            overflow: auto;
            background-color: rgb(243, 243, 243);
            animation-name: modalopen;
            animation-duration: 0.5s;

        `;
        
        const modalContent = document.createElement('div');
        const btn = document.createElement('input')
        modalContent.classList.add("modal-content");
        modalContent.style.cssText = `
			all: unset;
			position: relative;
			float: left;
			padding: 20px;
			width: auto;
			height: 400px;
			border-radius: 100px;
			margin-left:30px;
			margin-bottom:200px;
        `;    
        modalContent.innerHTML = `
        <head>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Google Docs click simulation</title>
			<style>
                table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; font-weight: 400}			  
                td, th { border: 1px solid #dddddd; text-align: left;	padding: 8px; font-weight: 400 ; }
                th { font-weight: bold;}			  
                tr:nth-child(even) { background-color: #dddddd; font-weight: 400}
                ul { list-style-type: none; font-weight: 400 }
                li { float: left; padding-right: 15px; font-weight: 400;  }                
                button { color: #fff; background-color: #007bff; border-color; #007bff; font-weight: 400; text-align: center; vertical-align: middle; padding: 7px 15px 7px 15px; border-radius: 0.25rem; }
                
                .content {
                    padding: 0 18px;
                    display: none;
                    overflow: hidden;
                    background-color: #f1f1f1;
                }
			</style>
		</head>
        <body>
            <div>
                <button id="myButton1" type="button">Sort</button>
                <button id="myButton2" type="button">Font</button>
                <button id="myButton" type="button" class="collapsible">Filter Column</button>
                <div class="content">
                <div id="checkbox_div" style='padding-top: 10px; padding-bottom: 10px;'>
                    <ul>
                        <li><input type="checkbox" id="brand_col" checked>Brand Name</li>
                        <li><input type="checkbox" id="price_col" checked>Price</li>
                        <li><input type="checkbox" id="model_col" checked>Model</li>
                        <li><input type="checkbox" id="delivery_col" checked>Delivery</li>
                        <li><input type="checkbox" id="specf_col" checked>Specification</li>
                    </ul>
                </div>
            </div>
            <input type="text" id="myInput" placeholder="Search for names.." />

            </div>
            
            <table id="mytable" style='width: 100%; margin-top: 20px;'>   
                <tr style="background-color: #FAEBD7; color: black; ">
                     
                    <th style='width: 45%' id="brand_col_head">Brand Name</th>
                    <th style='width: 10%' id="price_col_head">Price</th>
                    <th style='width: 30%' id="model_col_head">Model</th>
                    <th style='width: 30%' id="delivery_col_head">Delivery</th>
                    <th style='width: 50%' id="specf_col_head">Specification</th>

                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                   
                    <td class="brand_col">Acer Spin 3 Thin and Light</td>
                    <td class="price_col">$369.00</td>
                    <td class="model_col">NX.A4FAA.001</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">4GB DDR4, 128GB NVMe SSD, Windows 10 in S mode, SP314-21-R56W</td>
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col">Acer R13 Mediatek 2-in-1 Touch</td>
                    <td class="price_col">$327.00</td>
                    <td class="model_col">NX.GL4AA.018</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">4GB LPDDR3, 64GB eMMC, Chrome OS - CB5-312T-K95W</td>
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col">Acer Swift 3 13.5" 4K UHD PC Laptops</td>
                    <td class="price_col">$749.00</td>
                    <td class="model_col">SF313-52-526M</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">8GB RAM, 256GB SSD, Windows 10, Silver, SF313-52-526M</td>
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col">Lenovo ChromeBook 3 11.6 Chrome Laptop</td>
                    <td class="price_col">$169.00</td>
                    <td class="model_col">82BA0000US</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">8GB RAM, 256GB SSD, Windows 10, Silver, SF313-52-526M</td>

                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                   
                    <td class="brand_col">EVOO 11.6" Ultra Thin Notebook </td>
                    <td class="price_col">$149.00</td>
                    <td class="model_col"> EV-C-116-7BK</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">4GB Memory, Front Camera, HDMI, Windows 10 S</td>
                    
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col">Core Innovations CLT146401 14.1" Laptop</td>
                    <td class="price_col">$179.00</td>
                    <td class="model_col">CLT146401BL</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">4GB RAM - 64GB SSD - 1920 x 1080 - Windows 10 S</td>
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                    
                    <td class="brand_col">HP 15.6" Pentium 4GB/128GB Laptop </td>
                    <td class="price_col">$299.00</td>
                    <td class="model_col"> 15-dw1083wm</td>
                    <td class="delivery_col">Free delivery</td>
                    <td class="specf_col">4GB/128GB Laptop</td>

                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col">Acer 315 15.6" Celeron 4GB/32GB Chromebook</td>
                    <td class="price_col">$189.00</td>
                    <td class="model_col">NX.HKBAA.002</td>
                    <td class="delivery_col">Free delivery</td>
                    <td class="specf_col">4GB Ram 32GB Flash ChromeOS</td>

                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col">Lenovo IdeaPad 3 15.6" Laptop </td>
                    <td class="price_col">$416.00</td>
                    <td class="model_col"> 81WE0016US</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">8GB, 256GB NVMe TLC SSD, AMD Radeon 7 Graphics, Windows 10 Home</td>
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                   
                    <td class="brand_col">Refurbished Apple MacBook Pro 13.3</td>
                    <td class="price_col">$299.00</td>
                    <td class="model_col">MacBook</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">Intel i5 3210M 2.5GHz 4GB 500GB - MD101LLA</td>
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                    
                    <td class="brand_col">Lenovo IdeaPad Flex 5 14" FHD Convertible</td>
                    <td class="price_col">$369.00</td>
                    <td class="model_col"> 81X2000HUS</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">4GB RAM, 128GB SSD, Graphite Grey, Windows 10S</td>
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col">Acer Chromebook Spin 311 CP311-3H-K3WL</td>
                    <td class="price_col">$217.98</td>
                    <td class="model_col">NX.HUVAA.006</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">4GB LPDDR4X, 32GB eMMC MT8183C Octa-Core Processor</td>
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100% ">
                   
                    <td class="brand_col">Lenovo 81JW0001US Chromebook S330 </td>
                    <td class="price_col">$159.00</td>
                    <td class="model_col"> 81JW0001US</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">4GB RAM, 32GB eMMC SSD, Chrome OS</td>
                </tr>
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col">Gateway 15.6" FHD Ultra Slim Notebook</td>
                    <td class="price_col">$419.00</td>
                    <td class="model_col">GWTN156-1BL</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">16GB RAM, 256GB SSD, Fingerprint Scanner, Cortana, Windows 10 Home</td>
                </tr>
                <tr style="background-color: #F0F8FF; color: black; width:100%">
                    
                    <td class="brand_col">HP Pavilion i5 GTX 1650 8GB/256GB Gaming Laptop </td>
                    <td class="price_col">$683.92</td>
                    <td class="model_col"> 15-dk0056wm</td>
                    <td class="delivery_col">Free 2-day delivery</td>
                    <td class="specf_col">8GB RAM, 256GB SSD, DIGI CAMO</td>
                </tr>   
                <tr style="background-color: #FAEBD7; color: black; width:100% ">
                    
                    <td class="brand_col">Lenovo ChromeBook C340 11.6 Chrome Touch</td>
                    <td class="price_col">$259.00</td>
                    <td class="model_col">81TA0010US</td>
                    <td class="delivery_col">Free delivery</td>
                    <td class="specf_col">4GB Memory, 32GB eMMC Solid State Drive, Chrome OS</td>
                </tr>
            </table>
            </body>`;

        const tagBtn = document.createElement('div');
        tagBtn.setAttribute('id', 'tagBtn');
        tagBtn.innerText = '';
        tagBtn.style.cssText = `background-color: #EAEAEA;`;        

        modalContent.appendChild(tagBtn);
        modal.appendChild(modalContent)
        return modal;
    }
    
    //#endregion
    
    //#region Close Modal Static Method
    static closeMenu() {
        let body = document.querySelector('body');
        body.firstChild.remove();
    }
    
    //#endregion

    //#region Add Tag To Menu Static Method
    static addTag(e, tag) {
        // Get rid of trailing white space
        tag = tag.replace(/\s*$/,"").toLowerCase();
         
        // create tag div
        let chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerHTML = `${tag}<span class="closebtn";>&times;</span>`;
        
        // verify tag doesn't already exit TODO: instead of removing the chip, only add it if does not exists
        document.querySelectorAll('.chip').forEach(function(t) {
            if(t.textContent === (tag + '×')) {
                t.remove();
            }
        });

        
        // verify input field has content
        if(tag != '') {
            // append div to menu
            return chip;
        }
    }
    //#endregion
}
