const express = require('express');
const { Registration, Login, ProfileUpdate, ProfileDetails, RecoverVerifyEmail, RecoverVerifyOTP, RecoverResetPass } = require('../controllers/Users/UsersControllers');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');
const { CreateBrand, UpdateBrand, BrandList, BrandDropDown, DeleteBrand, BrandDetailsByID } = require('../controllers/Brands/BrandsController');
const { CreateCategories, UpdateCategories, CategoriesList, CategoriesDropDown, DeleteCategories, CategoriesDetailsByID } = require('../controllers/Categories/CategoriesController');
const { CreateCustomers, UpdateCustomers, CustomersList, CustomersDropDown, DeleteCustomer, CustomersDetailsByID } = require('../controllers/Customers/CustomersControllers');
const { CreateSuppliers, UpdateSuppliers, SuppliersList, SuppliersDropDown, DeleteSupplier, SuppliersDetailsByID } = require('../controllers/Suppliers/SuppliersControllers');
const { CreateExpenseTypes, UpdateExpenseTypes, ExpenseTypesList, ExpenseTypesDropDown, DeleteExpenseTypes, ExpenseTypesDetailsByID } = require('../controllers/Expenses/ExpenseTypesController');
const { CreateExpenses, UpdateExpenses, ExpensesList, DeleteExpense, ExpenseDetailsByID } = require('../controllers/Expenses/ExpensesController');
const { CreateProducts, UpdateProducts, ProductsList, DeleteProduct, ProductsDetailsByID } = require('../controllers/Products/ProductsController');
const { CreatePurchases, PurchasesList, PurchasesDelete } = require('../controllers/Purchases/PurchasesController');
const { CreateSales, SalesList, SaleDelete } = require('../controllers/Sales/SalesController');
const { CreateReturns, ReturnsList, ReturnDelete } = require('../controllers/Returns/ReturnsController');
const { ExpensesByDate, PurchaseByDate, ReturnByDate, SalesByDate } = require('../controllers/Report/ReportController');
const { ExpensesSummary, PurchaseSummary, ReturnSummary, SalesSummary } = require('../controllers/Summary/SummaryController');

const router = express.Router();

//user profile 
router.post("/Registration", Registration)
router.post("/Login", Login)
router.put("/ProfileUpdate", AuthVerifyMiddleware, ProfileUpdate)
router.get("/ProfileDetails", AuthVerifyMiddleware, ProfileDetails)
router.get("/RecoverVerifyEmail/:email", RecoverVerifyEmail)
router.get("/RecoverVerifyOTP/:email/:otp", RecoverVerifyOTP)
router.post("/RecoverVerifyOTP", RecoverResetPass)

//Brands
router.post("/CreateBrand", AuthVerifyMiddleware, CreateBrand)
router.post("/UpdateBrand/:id", AuthVerifyMiddleware, UpdateBrand)
router.get("/BrandList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, BrandList)
router.get("/BrandDropDown", AuthVerifyMiddleware, BrandDropDown)
router.get("/DeleteBrand/:id", AuthVerifyMiddleware, DeleteBrand)
router.get("/BrandDetailsByID/:id", AuthVerifyMiddleware, BrandDetailsByID)

//Categories
router.post("/CreateCategories", AuthVerifyMiddleware, CreateCategories)
router.post("/UpdateCategories/:id", AuthVerifyMiddleware, UpdateCategories)
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CategoriesList)
router.get("/CategoriesDropDown", AuthVerifyMiddleware, CategoriesDropDown)
router.get("/DeleteCategories/:id", AuthVerifyMiddleware, DeleteCategories)
router.get("/CategoriesDetailsByID/:id", AuthVerifyMiddleware, CategoriesDetailsByID)

//Customers
router.post("/CreateCustomers", AuthVerifyMiddleware, CreateCustomers)
router.post("/UpdateCustomers/:id", AuthVerifyMiddleware, UpdateCustomers)
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CustomersList)
router.get("/CustomersDropDown", AuthVerifyMiddleware, CustomersDropDown)
router.get("/DeleteCustomer/:id", AuthVerifyMiddleware, DeleteCustomer)
router.get("/CustomersDetailsByID/:id", AuthVerifyMiddleware, CustomersDetailsByID)

//Suppliers
router.post("/CreateSuppliers", AuthVerifyMiddleware, CreateSuppliers)
router.post("/UpdateSuppliers/:id", AuthVerifyMiddleware, UpdateSuppliers)
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, SuppliersList)
router.get("/SuppliersDropDown", AuthVerifyMiddleware, SuppliersDropDown)
router.get("/DeleteSupplier/:id", AuthVerifyMiddleware, DeleteSupplier)
router.get("/SuppliersDetailsByID/:id", AuthVerifyMiddleware, SuppliersDetailsByID)

//Expenses Type
router.post("/CreateExpenseTypes", AuthVerifyMiddleware, CreateExpenseTypes)
router.post("/UpdateExpenseTypes/:id", AuthVerifyMiddleware, UpdateExpenseTypes)
router.get("/ExpenseTypesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ExpenseTypesList)
router.get("/ExpenseTypesDropDown", AuthVerifyMiddleware, ExpenseTypesDropDown)
router.get("/DeleteExpenseTypes/:id", AuthVerifyMiddleware, DeleteExpenseTypes)
router.get("/ExpenseTypesDetailsByID/:id", AuthVerifyMiddleware, ExpenseTypesDetailsByID)

// Expenses
router.post("/CreateExpenses", AuthVerifyMiddleware, CreateExpenses)
router.post("/UpdateExpenses/:id", AuthVerifyMiddleware, UpdateExpenses)
router.get("/ExpensesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ExpensesList)
router.get("/DeleteExpense/:id", AuthVerifyMiddleware, DeleteExpense)
router.get("/ExpenseDetailsByID/:id", AuthVerifyMiddleware, ExpenseDetailsByID)

//Products
router.post("/CreateProducts", AuthVerifyMiddleware, CreateProducts)
router.post("/UpdateProducts/:id", AuthVerifyMiddleware, UpdateProducts)
router.get("/ProductsList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ProductsList)
router.get("/DeleteProduct/:id", AuthVerifyMiddleware, DeleteProduct)
router.get("/ProductsDetailsByID/:id", AuthVerifyMiddleware, ProductsDetailsByID)

//Purchases
router.post("/CreatePurchases", AuthVerifyMiddleware, CreatePurchases)
router.get("/PurchasesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, PurchasesList)
router.get("/PurchasesDelete/:id", AuthVerifyMiddleware, PurchasesDelete)

//Sales
router.post("/CreateSales", AuthVerifyMiddleware, CreateSales)
router.get("/SalesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, SalesList)
router.get("/SaleDelete/:id", AuthVerifyMiddleware, SaleDelete)

//Returns
router.post("/CreateReturns", AuthVerifyMiddleware, CreateReturns)
router.get("/ReturnsList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ReturnsList)
router.get("/ReturnDelete/:id", AuthVerifyMiddleware, ReturnDelete)

//Report
router.post("/ExpensesByDate", AuthVerifyMiddleware, ExpensesByDate)
router.post("/PurchaseByDate", AuthVerifyMiddleware, PurchaseByDate)
router.post("/ReturnByDate", AuthVerifyMiddleware, ReturnByDate)
router.post("/SalesByDate", AuthVerifyMiddleware, SalesByDate)

//Summary
router.get("/ExpensesSummary", AuthVerifyMiddleware, ExpensesSummary)
router.get("/PurchaseSummary", AuthVerifyMiddleware, PurchaseSummary)
router.get("/ReturnSummary", AuthVerifyMiddleware, ReturnSummary)
router.get("/SalesSummary", AuthVerifyMiddleware, SalesSummary)

module.exports = router;
