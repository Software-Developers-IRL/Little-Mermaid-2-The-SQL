# Mermaid erDiagram
* Generated using schemacrawler on: 2022-10-10
* using Little-Mermaid-2-TheSQL formatting
* DatabaseInfo: MySQL 5.6.50
* Schemas: [adventureworks]

## Diagrams:
* Diagram-1
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #1
      adventureworks_addresstype {
        INT AddressTypeID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #2
      adventureworks_productsubcategory {
        INT ProductSubcategoryID PK "NOT NULL"
        INT ProductCategoryID FK "NOT NULL"
        VARCHAR Name "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #3
      adventureworks_contact {
        INT ContactID PK "NOT NULL"
        BIT NameStyle "NOT NULL"
        VARCHAR Title
        VARCHAR FirstName "NOT NULL"
        VARCHAR MiddleName
        VARCHAR LastName "NOT NULL"
        VARCHAR Suffix
        VARCHAR EmailAddress
        INT EmailPromotion "NOT NULL"
        VARCHAR Phone
        VARCHAR PasswordHash "NOT NULL"
        VARCHAR PasswordSalt "NOT NULL"
        MEDIUMTEXT AdditionalContactInfo
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #4
      adventureworks_contacttype {
        INT ContactTypeID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #5
      adventureworks_countryregion {
        VARCHAR CountryRegionCode PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #6
      adventureworks_creditcard {
        INT CreditCardID PK "NOT NULL"
        VARCHAR CardType "NOT NULL"
        VARCHAR CardNumber "NOT NULL"
        TINYINT ExpMonth "NOT NULL"
        SMALLINT ExpYear "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #7
      adventureworks_culture {
        VARCHAR CultureID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #8
      adventureworks_currencyrate {
        INT CurrencyRateID PK "NOT NULL"
        DATETIME CurrencyRateDate "NOT NULL"
        VARCHAR FromCurrencyCode "NOT NULL"
        VARCHAR ToCurrencyCode "NOT NULL"
        DOUBLE AverageRate "NOT NULL"
        DOUBLE EndOfDayRate "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #9
      adventureworks_department {
        SMALLINT DepartmentID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        VARCHAR GroupName "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #10
      adventureworks_document {
        INT DocumentID PK "NOT NULL"
        VARCHAR Title "NOT NULL"
        MEDIUMTEXT FileName "NOT NULL"
        VARCHAR FileExtension "NOT NULL"
        VARCHAR Revision "NOT NULL"
        INT ChangeNumber "NOT NULL"
        TINYINT Status "NOT NULL"
        MEDIUMTEXT DocumentSummary
        BLOB Document
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #11
      adventureworks_illustration {
        INT IllustrationID PK "NOT NULL"
        TEXT Diagram
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #12
      adventureworks_location {
        SMALLINT LocationID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        DOUBLE CostRate "NOT NULL"
        DECIMAL Availability "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #13
      adventureworks_productcategory {
        INT ProductCategoryID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #14
      adventureworks_productdescription {
        INT ProductDescriptionID PK "NOT NULL"
        MEDIUMTEXT Description "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #15
      adventureworks_productmodel {
        INT ProductModelID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        TEXT CatalogDescription
        TEXT Instructions
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #16
      adventureworks_productphoto {
        INT ProductPhotoID PK "NOT NULL"
        BLOB ThumbNailPhoto
        VARCHAR ThumbnailPhotoFileName
        BLOB LargePhoto
        VARCHAR LargePhotoFileName
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #17
      adventureworks_salesreason {
        INT SalesReasonID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        VARCHAR ReasonType "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #18
      adventureworks_scrapreason {
        SMALLINT ScrapReasonID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #19
      adventureworks_shift {
        TINYINT ShiftID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        DATETIME StartTime "NOT NULL"
        DATETIME EndTime "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #20
      adventureworks_shipmethod {
        INT ShipMethodID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        DOUBLE ShipBase "NOT NULL"
        DOUBLE ShipRate "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #21
      adventureworks_vendor {
        INT VendorID PK "NOT NULL"
        VARCHAR AccountNumber "NOT NULL"
        VARCHAR Name "NOT NULL"
        TINYINT CreditRating "NOT NULL"
        BIT PreferredVendorStatus "NOT NULL"
        BIT ActiveFlag "NOT NULL"
        MEDIUMTEXT PurchasingWebServiceURL
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #22
      adventureworks_contactcreditcard {
        INT ContactID PK "NOT NULL"
        INT CreditCardID PK "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #23
      adventureworks_employee {
        INT EmployeeID PK "NOT NULL"
        VARCHAR NationalIDNumber "NOT NULL"
        INT ContactID FK "NOT NULL"
        VARCHAR LoginID "NOT NULL"
        INT ManagerID FK
        VARCHAR Title "NOT NULL"
        DATETIME BirthDate "NOT NULL"
        VARCHAR MaritalStatus "NOT NULL"
        VARCHAR Gender "NOT NULL"
        DATETIME HireDate "NOT NULL"
        BIT SalariedFlag "NOT NULL"
        SMALLINT VacationHours "NOT NULL"
        SMALLINT SickLeaveHours "NOT NULL"
        BIT CurrentFlag "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #24
      adventureworks_productmodelillustration {
        INT ProductModelID PK "NOT NULL"
        INT IllustrationID PK "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #25
      adventureworks_productmodelproductdescriptionculture {
        INT ProductModelID PK "NOT NULL"
        INT ProductDescriptionID PK "NOT NULL"
        VARCHAR CultureID PK "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #26
      adventureworks_salesterritory {
        INT TerritoryID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        VARCHAR CountryRegionCode FK "NOT NULL"
        VARCHAR Group "NOT NULL"
        DOUBLE SalesYTD "NOT NULL"
        DOUBLE SalesLastYear "NOT NULL"
        DOUBLE CostYTD "NOT NULL"
        DOUBLE CostLastYear "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #27
      adventureworks_vendorcontact {
        INT VendorID PK "NOT NULL"
        INT ContactID PK "NOT NULL"
        INT ContactTypeID "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #28
      adventureworks_customer {
        INT CustomerID PK "NOT NULL"
        INT TerritoryID FK
        VARCHAR AccountNumber "NOT NULL"
        VARCHAR CustomerType "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #29
      adventureworks_employeedepartmenthistory {
        INT EmployeeID PK "NOT NULL"
        SMALLINT DepartmentID PK "NOT NULL"
        TINYINT ShiftID PK "NOT NULL"
        DATETIME StartDate PK "NOT NULL"
        DATETIME EndDate
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #30
      adventureworks_employeepayhistory {
        INT EmployeeID PK "NOT NULL"
        DATETIME RateChangeDate PK "NOT NULL"
        DOUBLE Rate "NOT NULL"
        TINYINT PayFrequency "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #31
      adventureworks_jobcandidate {
        INT JobCandidateID PK "NOT NULL"
        INT EmployeeID FK
        TEXT Resume
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #32
      adventureworks_product {
        INT ProductID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        VARCHAR ProductNumber "NOT NULL"
        BIT MakeFlag "NOT NULL"
        BIT FinishedGoodsFlag "NOT NULL"
        VARCHAR Color
        SMALLINT SafetyStockLevel "NOT NULL"
        SMALLINT ReorderPoint "NOT NULL"
        DOUBLE StandardCost "NOT NULL"
        DOUBLE ListPrice "NOT NULL"
        VARCHAR Size
        VARCHAR SizeUnitMeasureCode
        VARCHAR WeightUnitMeasureCode
        DECIMAL Weight
        INT DaysToManufacture "NOT NULL"
        VARCHAR ProductLine
        VARCHAR Class
        VARCHAR Style
        INT ProductSubcategoryID FK
        INT ProductModelID FK
        DATETIME SellStartDate "NOT NULL"
        DATETIME SellEndDate
        DATETIME DiscontinuedDate
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #33
      adventureworks_purchaseorderheader {
        INT PurchaseOrderID PK "NOT NULL"
        TINYINT RevisionNumber
        TINYINT Status
        INT EmployeeID FK
        INT VendorID FK
        INT ShipMethodID FK
        DATETIME OrderDate
        DATETIME ShipDate
        DOUBLE SubTotal
        DOUBLE TaxAmt
        DOUBLE Freight
        DOUBLE TotalDue
        DATETIME ModifiedDate
      }

      %% Entity With No Relantionships #34
      adventureworks_salesperson {
        INT SalesPersonID PK "NOT NULL"
        INT TerritoryID FK
        DOUBLE SalesQuota
        DOUBLE Bonus "NOT NULL"
        DOUBLE CommissionPct "NOT NULL"
        DOUBLE SalesYTD "NOT NULL"
        DOUBLE SalesLastYear "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #35
      adventureworks_salesterritoryhistory {
        INT SalesPersonID PK "NOT NULL"
        INT TerritoryID PK "NOT NULL"
        DATETIME StartDate PK "NOT NULL"
        DATETIME EndDate
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #36
      adventureworks_stateprovince {
        INT StateProvinceID PK "NOT NULL"
        VARCHAR StateProvinceCode "NOT NULL"
        VARCHAR CountryRegionCode FK "NOT NULL"
        BIT IsOnlyStateProvinceFlag "NOT NULL"
        VARCHAR Name "NOT NULL"
        INT TerritoryID FK "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #37
      adventureworks_address {
        INT AddressID PK "NOT NULL"
        VARCHAR AddressLine1 "NOT NULL"
        VARCHAR AddressLine2
        VARCHAR City "NOT NULL"
        INT StateProvinceID FK "NOT NULL"
        VARCHAR PostalCode "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #38
      adventureworks_billofmaterials {
        INT BillOfMaterialsID PK "NOT NULL"
        INT ProductAssemblyID FK
        INT ComponentID FK "NOT NULL"
        DATETIME StartDate "NOT NULL"
        DATETIME EndDate
        VARCHAR UnitMeasureCode "NOT NULL"
        SMALLINT BOMLevel "NOT NULL"
        DECIMAL PerAssemblyQty "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #39
      adventureworks_individual {
        INT CustomerID PK "NOT NULL"
        INT ContactID FK "NOT NULL"
        TEXT Demographics
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #40
      adventureworks_productcosthistory {
        INT ProductID PK "NOT NULL"
        DATETIME StartDate PK "NOT NULL"
        DATETIME EndDate
        DOUBLE StandardCost "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #41
      adventureworks_productdocument {
        INT ProductID PK "NOT NULL"
        INT DocumentID PK "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #42
      adventureworks_productinventory {
        INT ProductID PK "NOT NULL"
        SMALLINT LocationID PK "NOT NULL"
        VARCHAR Shelf "NOT NULL"
        TINYINT Bin "NOT NULL"
        SMALLINT Quantity "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #43
      adventureworks_productlistpricehistory {
        INT ProductID PK "NOT NULL"
        DATETIME StartDate PK "NOT NULL"
        DATETIME EndDate
        DOUBLE ListPrice "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #44
      adventureworks_productproductphoto {
        INT ProductID PK "NOT NULL"
        INT ProductPhotoID PK "NOT NULL"
        BIT Primary "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #45
      adventureworks_productreview {
        INT ProductReviewID PK "NOT NULL"
        INT ProductID FK "NOT NULL"
        VARCHAR ReviewerName
        TIMESTAMP ReviewDate "NOT NULL"
        VARCHAR EmailAddress
        INT Rating "NOT NULL"
        MEDIUMTEXT Comments
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #46
      adventureworks_productvendor {
        INT ProductID PK "NOT NULL"
        INT VendorID PK "NOT NULL"
        INT AverageLeadTime "NOT NULL"
        DOUBLE StandardPrice "NOT NULL"
        DOUBLE LastReceiptCost
        DATETIME LastReceiptDate
        INT MinOrderQty
        INT MaxOrderQty "NOT NULL"
        INT OnOrderQty
        VARCHAR UnitMeasureCode "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #47
      adventureworks_purchaseorderdetail {
        INT PurchaseOrderID PK "NOT NULL"
        INT PurchaseOrderDetailID PK "NOT NULL"
        DATETIME DueDate "NOT NULL"
        SMALLINT OrderQty "NOT NULL"
        INT ProductID FK "NOT NULL"
        DOUBLE UnitPrice "NOT NULL"
        DOUBLE LineTotal "NOT NULL"
        DECIMAL ReceivedQty "NOT NULL"
        DECIMAL RejectedQty "NOT NULL"
        DECIMAL StockedQty "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #48
      adventureworks_salespersonquotahistory {
        INT SalesPersonID PK "NOT NULL"
        DATETIME QuotaDate PK "NOT NULL"
        DOUBLE SalesQuota "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #49
      adventureworks_shoppingcartitem {
        INT ShoppingCartItemID PK "NOT NULL"
        VARCHAR ShoppingCartID "NOT NULL"
        INT Quantity "NOT NULL"
        INT ProductID FK "NOT NULL"
        TIMESTAMP DateCreated "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #50
      adventureworks_specialofferproduct {
        INT SpecialOfferID PK "NOT NULL"
        INT ProductID PK "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #51
      adventureworks_store {
        INT CustomerID PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        INT SalesPersonID FK
        TEXT Demographics
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #52
      adventureworks_storecontact {
        INT CustomerID PK "NOT NULL"
        INT ContactID PK "NOT NULL"
        INT ContactTypeID FK "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #53
      adventureworks_transactionhistory {
        INT TransactionID PK "NOT NULL"
        INT ProductID FK "NOT NULL"
        INT ReferenceOrderID "NOT NULL"
        INT ReferenceOrderLineID "NOT NULL"
        TIMESTAMP TransactionDate "NOT NULL"
        VARCHAR TransactionType "NOT NULL"
        INT Quantity "NOT NULL"
        DOUBLE ActualCost "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #54
      adventureworks_transactionhistoryarchive {
        INT TransactionID PK "NOT NULL"
        INT ProductID FK "NOT NULL"
        INT ReferenceOrderID "NOT NULL"
        INT ReferenceOrderLineID "NOT NULL"
        TIMESTAMP TransactionDate "NOT NULL"
        VARCHAR TransactionType "NOT NULL"
        INT Quantity "NOT NULL"
        DOUBLE ActualCost "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #55
      adventureworks_workorder {
        INT WorkOrderID PK "NOT NULL"
        INT ProductID FK "NOT NULL"
        INT OrderQty "NOT NULL"
        INT StockedQty "NOT NULL"
        SMALLINT ScrappedQty "NOT NULL"
        DATETIME StartDate "NOT NULL"
        DATETIME EndDate
        DATETIME DueDate "NOT NULL"
        SMALLINT ScrapReasonID FK
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #56
      adventureworks_customeraddress {
        INT CustomerID PK "NOT NULL"
        INT AddressID PK "NOT NULL"
        INT AddressTypeID FK "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #57
      adventureworks_employeeaddress {
        INT EmployeeID PK "NOT NULL"
        INT AddressID PK "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #58
      adventureworks_salesorderheader {
        INT SalesOrderID PK "NOT NULL"
        TINYINT RevisionNumber "NOT NULL"
        TIMESTAMP OrderDate "NOT NULL"
        DATETIME DueDate "NOT NULL"
        DATETIME ShipDate "NOT NULL"
        TINYINT Status "NOT NULL"
        BIT OnlineOrderFlag "NOT NULL"
        VARCHAR SalesOrderNumber "NOT NULL"
        VARCHAR PurchaseOrderNumber
        VARCHAR AccountNumber
        INT CustomerID FK "NOT NULL"
        INT ContactID FK "NOT NULL"
        INT SalesPersonID
        INT TerritoryID FK
        INT BillToAddressID FK "NOT NULL"
        INT ShipToAddressID FK "NOT NULL"
        INT ShipMethodID FK "NOT NULL"
        INT CreditCardID FK
        VARCHAR CreditCardApprovalCode
        INT CurrencyRateID FK
        DOUBLE SubTotal "NOT NULL"
        DOUBLE TaxAmt "NOT NULL"
        DOUBLE Freight "NOT NULL"
        DOUBLE TotalDue "NOT NULL"
        VARCHAR Comment
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #59
      adventureworks_vendoraddress {
        INT VendorID PK "NOT NULL"
        INT AddressID PK "NOT NULL"
        INT AddressTypeID FK "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #60
      adventureworks_workorderrouting {
        INT WorkOrderID PK "NOT NULL"
        INT ProductID PK "NOT NULL"
        SMALLINT OperationSequence PK "NOT NULL"
        SMALLINT LocationID FK "NOT NULL"
        DATETIME ScheduledStartDate "NOT NULL"
        DATETIME ScheduledEndDate "NOT NULL"
        DATETIME ActualStartDate
        DATETIME ActualEndDate
        DECIMAL ActualResourceHrs
        DOUBLE PlannedCost "NOT NULL"
        DOUBLE ActualCost
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #61
      adventureworks_salesorderdetail {
        INT SalesOrderID PK "NOT NULL"
        INT SalesOrderDetailID PK "NOT NULL"
        VARCHAR CarrierTrackingNumber
        SMALLINT OrderQty "NOT NULL"
        INT ProductID FK "NOT NULL"
        INT SpecialOfferID FK "NOT NULL"
        DOUBLE UnitPrice "NOT NULL"
        DOUBLE UnitPriceDiscount "NOT NULL"
        DOUBLE LineTotal "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #62
      adventureworks_salesorderheadersalesreason {
        INT SalesOrderID PK "NOT NULL"
        INT SalesReasonID PK "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      adventureworks_productcategory ||--o{ adventureworks_productsubcategory : "[adventureworks_productcategory.ProductCategoryID] to [adventureworks_productsubcategory.ProductCategoryID]"

      adventureworks_contact ||--o{ adventureworks_contactcreditcard : "[adventureworks_contact.ContactID] to [adventureworks_contactcreditcard.ContactID]"
      adventureworks_creditcard ||--o{ adventureworks_contactcreditcard : "[adventureworks_creditcard.CreditCardID] to [adventureworks_contactcreditcard.CreditCardID]"

      adventureworks_contact ||--o{ adventureworks_employee : "[adventureworks_contact.ContactID] to [adventureworks_employee.ContactID]"

      adventureworks_illustration ||--o{ adventureworks_productmodelillustration : "[adventureworks_illustration.IllustrationID] to [adventureworks_productmodelillustration.IllustrationID]"
      adventureworks_productmodel ||--o{ adventureworks_productmodelillustration : "[adventureworks_productmodel.ProductModelID] to [adventureworks_productmodelillustration.ProductModelID]"

      adventureworks_culture ||--o{ adventureworks_productmodelproductdescriptionculture : "[adventureworks_culture.CultureID] to [adventureworks_productmodelproductdescriptionculture.CultureID]"
      adventureworks_productdescription ||--o{ adventureworks_productmodelproductdescriptionculture : "[adventureworks_productdescription.ProductDescriptionID] to [adventureworks_productmodelproductdescriptionculture.ProductDescriptionID]"
      adventureworks_productmodel ||--o{ adventureworks_productmodelproductdescriptionculture : "[adventureworks_productmodel.ProductModelID] to [adventureworks_productmodelproductdescriptionculture.ProductModelID]"

      adventureworks_countryregion ||--o{ adventureworks_salesterritory : "[adventureworks_countryregion.CountryRegionCode] to [adventureworks_salesterritory.CountryRegionCode]"

      adventureworks_contact ||--o{ adventureworks_vendorcontact : "[adventureworks_contact.ContactID] to [adventureworks_vendorcontact.ContactID]"

      adventureworks_salesterritory ||--o{ adventureworks_customer : "[adventureworks_salesterritory.TerritoryID] to [adventureworks_customer.TerritoryID]"

      adventureworks_department ||--o{ adventureworks_employeedepartmenthistory : "[adventureworks_department.DepartmentID] to [adventureworks_employeedepartmenthistory.DepartmentID]"
      adventureworks_employee ||--o{ adventureworks_employeedepartmenthistory : "[adventureworks_employee.EmployeeID] to [adventureworks_employeedepartmenthistory.EmployeeID]"
      adventureworks_shift ||--o{ adventureworks_employeedepartmenthistory : "[adventureworks_shift.ShiftID] to [adventureworks_employeedepartmenthistory.ShiftID]"

      adventureworks_employee ||--o{ adventureworks_employeepayhistory : "[adventureworks_employee.EmployeeID] to [adventureworks_employeepayhistory.EmployeeID]"

      adventureworks_employee ||--o{ adventureworks_jobcandidate : "[adventureworks_employee.EmployeeID] to [adventureworks_jobcandidate.EmployeeID]"

      adventureworks_productmodel ||--o{ adventureworks_product : "[adventureworks_productmodel.ProductModelID] to [adventureworks_product.ProductModelID]"
```
* Diagram-2
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #1
      adventureworks_awbuildversion {
        INT SystemInformationID PK "NOT NULL"
        VARCHAR DatabaseVersion "'Database Version' NOT NULL"
        DATETIME VersionDate "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #2
      adventureworks_countryregioncurrency {
        VARCHAR CountryRegionCode PK "NOT NULL"
        VARCHAR CurrencyCode PK "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #3
      adventureworks_currency {
        VARCHAR CurrencyCode PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #4
      adventureworks_databaselog {
        INT DatabaseLogID PK "NOT NULL"
        TIMESTAMP PostTime "NOT NULL"
        VARCHAR DatabaseUser "NOT NULL"
        VARCHAR Event "NOT NULL"
        VARCHAR Schema
        VARCHAR Object
        MEDIUMTEXT TSQL "NOT NULL"
        MEDIUMTEXT XmlEvent "NOT NULL"
      }

      %% Entity With No Relantionships #5
      adventureworks_errorlog {
        INT ErrorLogID PK "NOT NULL"
        TIMESTAMP ErrorTime "NOT NULL"
        VARCHAR UserName "NOT NULL"
        INT ErrorNumber "NOT NULL"
        INT ErrorSeverity
        INT ErrorState
        VARCHAR ErrorProcedure
        INT ErrorLine
        MEDIUMTEXT ErrorMessage "NOT NULL"
      }

    ```
* Diagram-3
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #6
      adventureworks_salestaxrate {
        INT SalesTaxRateID PK "NOT NULL"
        INT StateProvinceID "NOT NULL"
        TINYINT TaxType "NOT NULL"
        DOUBLE TaxRate "NOT NULL"
        VARCHAR Name "NOT NULL"
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #7
      adventureworks_specialoffer {
        INT SpecialOfferID PK "NOT NULL"
        VARCHAR Description "NOT NULL"
        DOUBLE DiscountPct "NOT NULL"
        VARCHAR Type "NOT NULL"
        VARCHAR Category "NOT NULL"
        DATETIME StartDate "NOT NULL"
        DATETIME EndDate "NOT NULL"
        INT MinQty "NOT NULL"
        INT MaxQty
        VARBINARY rowguid "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

      %% Entity With No Relantionships #8
      adventureworks_unitmeasure {
        VARCHAR UnitMeasureCode PK "NOT NULL"
        VARCHAR Name "NOT NULL"
        TIMESTAMP ModifiedDate "NOT NULL"
      }

    ```
## Summary:
* Entities with Relationships:62
* Entities without Relationships:8
* Total Entities:70