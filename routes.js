// app : express app object
// db : database object
module.exports = (app, db) => {

    // Message Error Strings used : 
    // 0 : Error occured/ failure
    // 1 : Success
    
    // test endpoint
    app.get("/", (req, res) => {
        res.send("All OK!");
    })

    // ********* START OF LOGIN & REGISTER PART ********* //

    // registering user
    app.post("/register", (req, res) => {
        var firstname = req.body.firstname;
        var lastname  = req.body.lastname;
        var mobile    = req.body.mobile;
        var email     = req.body.email;
        var password  = req.body.password;
        var city      = req.body.city;
        var address   = req.body.address;
        var pin       = req.body.pin;

        var sql = "INSERT INTO users (firstname, lastname, mobile, email, password, city, address, pin) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
        db.query(sql, [firstname, lastname, mobile, email, password, city, address, pin], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
				console.log("Registration successfull");
				res.json({message :"1"});
			}
        })
    })

    // login user
    app.post('/login', (req, res) => {
        var email	 = req.body.email;
        var password = req.body.password;
		var sql 	= "SELECT * FROM users WHERE email = ? AND password = ?";

		db.query(sql, [email, password], (err, result) => {
			if(err)	{
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                // user exists
				if(result.length > 0 ){
					console.log("Login successfull");
				    res.json({message :"1"});
                }
                // user not found
				else{
					console.log("User not found");
				    res.json({message : "0"});	
				}
			}
		})
    })

    // login ADMIN
    app.post('/loginAdmin', (req, res) => {
        var email	 = req.body.email;
        var password = req.body.password;
		var sql 	= "SELECT * FROM admin WHERE email = ? AND password = ?";

		db.query(sql, [email, password], (err, result) => {
			if(err)	{
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                // user exists
				if(result.length > 0 ){
					console.log("Login successfull");
				    res.json({message :"1"});
                }
                // user not found
				else{
					console.log("User not found");
				    res.json({message : "0"});	
				}
			}
		})
    })
    
    // registering editor
    app.post("/registerEditor", (req, res) => {
        var firstname = req.body.firstname;
        var lastname  = req.body.lastname;
        var mobile    = req.body.mobile;
        var email     = req.body.email;
        var password  = req.body.password;
        var city      = req.body.city;
        var address   = req.body.address;
        var pin       = req.body.pin;
        var code      = req.body.code;

        var sql = "INSERT INTO editors (firstname, lastname, mobile, email, password, city, address, pin, Code) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
        db.query(sql, [firstname, lastname, mobile, email, password, city, address, pin, code], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
				console.log("Registration successfull");
				res.json({message :"1"});
			}
        })
    })

    // login editor
    app.post('/loginEditor', (req, res) => {
        var email	 = req.body.email;
        var password = req.body.password;
		var sql 	= "SELECT * FROM editors WHERE email = ? AND password = ?";

		db.query(sql, [email, password], (err, result) => {
			if(err)	{
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                // user exists
				if(result.length > 0 ){
					console.log("Login successfull");
				    res.json({message :"1"});
                }
                // user not found
				else{
					console.log("User not found");
				    res.json({message : "0"});	
				}
			}
		})
    })

    // registering vendor
    app.post("/registerVendor", (req, res) => {
        var firstname = req.body.firstname;
        var lastname  = req.body.lastname;
        var mobile    = req.body.mobile;
        var email     = req.body.email;
        var password  = req.body.password;
        var city      = req.body.city;
        var address   = req.body.address;
        var lat       = req.body.lat;
        var longd     = req.body.longd;
        var pinc      = req.body.pinc;
        var shop_name = req.body.shop_name;
        var status    = req.body.status;
        var verified  = req.body.verified; 

        var sql = "INSERT INTO vendors (firstname, lastname, mobile, email, password, city, address, lat, longd, pinc, shop_name, status, verified) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        db.query(sql, [firstname, lastname, mobile, email, password, city, address, lat, longd, pinc, shop_name, status, verified], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
				console.log("Registration successfull");
				res.json({message :"1"});
			}
        })
    })

    // login vendor
    app.post("/loginVendor", (req, res) => {
        var email	 = req.body.email;
        var password = req.body.password;
		var sql 	= "SELECT * FROM vendors WHERE email = ? AND password = ?";

		db.query(sql, [email, password], (err, result) => {
			if(err)	{
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                // user exists
				if(result.length > 0 ){
					console.log("Login successfull");
				    res.json({message :"1"});
                }
                // user not found
				else{
					console.log("User not found");
				    res.json({message : "0"});	
				}
			}
		})
    })

    // ********* END OF LOGIN & REGISTER PART ********* //

    // ********* START OF EDITORS PART ********* //

    // get editor details using editor id
    app.get("/getEditorById", (req, res) => {
        var editorId = req.body.editorId;

        var sql = "SELECT * FROM editors WHERE id = ?"
        db.query(sql, [editorId], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Editors successfull");
                    res.json({message :"1", output : result[0]});
                } else {
                    console.log("Editors failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // ********* END OF EDITORS PART ********* //

    // ********* START OF VENDORS PART ********* //

    // get vendor details by shop id
    app.get("/getVendorById", (req, res) => {
        var vendorId = req.body.vendorId;

        var sql = "SELECT * FROM vendors WHERE id = ?"
        db.query(sql, [vendorId], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Vendors successfull");
                    res.json({message :"1", output : result[0]});
                } else {
                    console.log("Vendors failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get vendor details by shop name
    app.get("/getVendorByShopName", (req, res) => {
        var shop_name = req.body.shop_name;

        var sql = "SELECT * FROM vendors WHERE shop_name LIKE '%' ? '%' "
        db.query(sql, [shop_name], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Vendors successfull");
                    res.json({message :"1", output : result});
                } else {
                    console.log("Vendors failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get all vendors by their status (Enable/ Disable)
    app.get("/getAllVendorsStatus", (req, res) => {
        var status    = req.body.status;

        var sql = "SELECT * FROM vendors WHERE status = ?"
        db.query(sql, [status], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Vendors successfull");
                    res.json({message :"1", output : result});
                } else {
                    console.log("Vendors failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get all vendors by their verified (yes/ no)
    app.get("/getAllVendorsVerify", (req, res) => {
        var verify  = req.body.verify;

        var sql = "SELECT * FROM vendors WHERE verified = ?"
        db.query(sql, [verify], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Vendors successfull");
                    res.json({message :"1", output : result});
                } else {
                    console.log("Vendors failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get a vendor stautus with ID
    app.get("/getStatusOfVendorById", (req, res) => {
        var vendorId  = req.body.vendorId;

        var sql = "SELECT status FROM vendors WHERE id = ?"
        db.query(sql, [vendorId], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Vendors successfull");
                    res.json({message :"1", output : result[0]});
                } else {
                    console.log("Vendors failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get a vendor verified with ID
    app.get("/getVerifyOfVendorById", (req, res) => {
        var vendorId    = req.body.vendorId;

        var sql = "SELECT verified FROM vendors WHERE id = ?"
        db.query(sql, [vendorId], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Vendors successfull");
                    res.json({message :"1", output : result[0]});
                } else {
                    console.log("Vendors failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // change status (Enable/ Disable)
    app.post("/addStatusForVendor", (req, res) => {
        var vendorId    = req.body.vendorId;
        var status      = req.body.status;

        var sql = "UPDATE vendors SET verified = ? WHERE id = ?";
        db.query(sql, [status, vendorId], (err, result) => {
            if(err){
                console.log(err.sqlMessage);
                res.json({message : "0"});	
            } else{
                console.log("Vendor status updation successfull");
                res.json({message :"1"});
            }
        }) 
    })

    // change verified status (yes/ no)
    app.post("/addVerifiedForVendor", (req, res) => {
        var vendorId    = req.body.vendorId;
        var status      = req.body.status;

        var sql = "UPDATE vendors SET verified = ? WHERE id = ?";
        db.query(sql, [status, vendorId], (err, result) => {
            if(err){
                console.log(err.sqlMessage);
                res.json({message : "0"});	
            } else{
                console.log("Vendor verify updation successfull");
                res.json({message :"1"});
            }
        }) 
    })

    // ********* END OF VENDORS PART ********* //

    // ********* START OF PRODUCTS PART ********* //

    // get all products for category
    app.get("/getAllProductsWithCategory", (req, res) => {
        var category = req.body.category;

        var sql = "SELECT * FROM products WHERE category = ?"
        db.query(sql, [category], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Products successfull");
                    res.json({message :"1", output : result});
                } else {
                    console.log("Products failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get all products for sub category
    app.get("/getAllProductsWithSubCategory", (req, res) => {
        var subCategory = req.body.subCategory;

        var sql = "SELECT * FROM products WHERE sub_category = ?"
        db.query(sql, [subCategory], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Products successfull");
                    res.json({message :"1", output : result});
                } else {
                    console.log("Products failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get product with location (city)
    app.get("/getProductsWithCity", (req, res) => {
        var city = req.body.city;

        var sql = "SELECT * FROM products INNER JOIN vendors ON products.vendor_id = vendors.id WHERE vendors.city = ?";
        db.query(sql, [city], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Products successfull");
                    res.json({message :"1", output : result});
                } else {
                    console.log("Products failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get all products of single Vendor
    app.get("/getAllProductsForVendor", (req, res) => {
        var vendorId = req.body.vendorId;

        var sql = "SELECT * FROM products WHERE vendor_id = ?"
        db.query(sql, [vendorId], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Products successfull");
                    res.json({message :"1", output : result});
                } else {
                    console.log("Products failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get product with product ID
    app.get("/getProductWithId", (req, res) => {
        var productId = req.body.productId;

        var sql = "SELECT * FROM products WHERE id = ?"
        db.query(sql, [productId], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Products successfull");
                    res.json({message :"1", output : result[0]});
                } else {
                    console.log("Products failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get all featured products
    app.get("/getAllFeaturedProducts", (req, res) => {
        var sql = "SELECT * FROM products WHERE featured = 1"
        db.query(sql, (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Products successfull");
                    res.json({message :"1", output : result});
                } else {
                    console.log("Products failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // get product image by id
    app.get("/getProductImageWithId", (req, res) => {
        var productId = req.body.productId;

        var sql = "SELECT image_url FROM products WHERE id = ?"
        db.query(sql, [productId], (err, result) => {
            if(err){
				console.log(err.sqlMessage);
				res.json({message : "0"});	
			} else{
                if(result.length > 0){
                    console.log("Products successfull");
                    res.json({message :"1", output : result[0]});
                } else {
                    console.log("Products failure");
                    res.json({message :"0"});
                }
			}
        })
    })

    // add product to the db
    app.post("/addProduct", (req, res) => {
        var vendor_id = req.body.vendor_id;
        var brand_name = req.body.brand_name;
        var category = req.body.category;
        var sub_category = req.body.sub_category;
        var product_name = req.body.product_name;
        var product_code = req.body.product_code;
        var description = req.body.description;
        var image_url = req.body.image_url;
        var quantity = req.body.quantity;
        var mrp = req.body.mrp;
        var selling_price = req.body.selling_price;
        var newproducts = req.body.newproducts;
        var featured = req.body.featured;
        var popular = req.body.popular;
        var HSN_code = req.body.HSN_code;
        var fk_link = req.body.fk_link;
        var sd_link = req.body.sd_link;
        var az_link = req.body.az_link;
        var x_link = req.body.x_link;
        var y_link = req.body.y_link;

        var sql = "INSERT INTO products(vendor_id , brand_name, category, sub_category, product_name, product_code, description, image_url, quantity, mrp, selling_price, newproducts, featured, popular, HSN_code, fk_link, sd_link, az_link, x_link, y_link) \
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        db.query(sql, [vendor_id, brand_name, category, sub_category, product_name, product_code, description, image_url, quantity, mrp, selling_price, newproducts, featured, popular, HSN_code, fk_link, sd_link, az_link, x_link, y_link], (err, result) => {
            if(err){
                console.log(err.sqlMessage);
                res.json({message : "0"});	
            } else{
                console.log("Product adding successfull");
                res.json({message :"1"});
            }
        })            

    })

    // ********* END OF PRODUCTS PART ********* //
}