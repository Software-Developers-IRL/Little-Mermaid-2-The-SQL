# Mermaid erDiagram
* Generated using schemacrawler on: 2022-10-10
* using Little-Mermaid-2-TheSQL formatting
* DatabaseInfo: PostgreSQL 14.2 (Debian 14.2-1.pgdg110+1)
* DatabaseName DriverProperty: PGDBNAME = Adventureworks
* Schemas: [hr, humanresources, pe, person, pr, production, pu, public, purchasing, sa, sales]

## Diagrams:
* Diagram-1
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #1
      humanresources_department {
        serial departmentid PK "NOT NULL"
        Name name "NOT NULL"
        Name groupname "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #2
      humanresources_shift {
        serial shiftid PK "NOT NULL"
        Name name "NOT NULL"
        time starttime "NOT NULL"
        time endtime "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #3
      person_addresstype {
        serial addresstypeid PK "NOT NULL"
        Name name "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #4
      person_businessentity {
        serial businessentityid PK "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #5
      person_contacttype {
        serial contacttypeid PK "NOT NULL"
        Name name "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #6
      person_countryregion {
        varchar countryregioncode PK "NOT NULL"
        Name name "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #7
      person_phonenumbertype {
        serial phonenumbertypeid PK "NOT NULL"
        Name name "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #8
      production_culture {
        bpchar cultureid PK "NOT NULL"
        Name name "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #9
      production_illustration {
        serial illustrationid PK "NOT NULL"
        xml diagram
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #10
      production_location {
        serial locationid PK "NOT NULL"
        Name name "NOT NULL"
        numeric costrate "NOT NULL"
        numeric availability "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #11
      production_productcategory {
        serial productcategoryid PK "NOT NULL"
        Name name "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #12
      production_productdescription {
        serial productdescriptionid PK "NOT NULL"
        varchar description "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #13
      production_productmodel {
        serial productmodelid PK "NOT NULL"
        Name name "NOT NULL"
        xml catalogdescription
        xml instructions
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #14
      production_productphoto {
        serial productphotoid PK "NOT NULL"
        bytea thumbnailphoto
        varchar thumbnailphotofilename
        bytea largephoto
        varchar largephotofilename
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #15
      production_scrapreason {
        serial scrapreasonid PK "NOT NULL"
        Name name "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #16
      production_unitmeasure {
        bpchar unitmeasurecode PK "NOT NULL"
        Name name "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #17
      purchasing_shipmethod {
        serial shipmethodid PK "NOT NULL"
        Name name "NOT NULL"
        numeric shipbase "NOT NULL"
        numeric shiprate "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #18
      sales_creditcard {
        serial creditcardid PK "NOT NULL"
        varchar cardtype "NOT NULL"
        varchar cardnumber "NOT NULL"
        int2 expmonth "NOT NULL"
        int2 expyear "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #19
      sales_currency {
        bpchar currencycode PK "NOT NULL"
        Name name "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #20
      sales_salesreason {
        serial salesreasonid PK "NOT NULL"
        Name name "NOT NULL"
        Name reasontype "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #21
      sales_specialoffer {
        serial specialofferid PK "NOT NULL"
        varchar description "NOT NULL"
        numeric discountpct "NOT NULL"
        varchar type "NOT NULL"
        varchar category "NOT NULL"
        timestamp startdate "NOT NULL"
        timestamp enddate "NOT NULL"
        int4 minqty "NOT NULL"
        int4 maxqty
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #22
      person_person {
        int4 businessentityid PK "NOT NULL"
        bpchar persontype "NOT NULL"
        NameStyle namestyle "NOT NULL"
        varchar title
        Name firstname "NOT NULL"
        Name middlename
        Name lastname "NOT NULL"
        varchar suffix
        int4 emailpromotion "NOT NULL"
        xml additionalcontactinfo
        xml demographics
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #23
      production_productmodelillustration {
        int4 productmodelid PK "NOT NULL"
        int4 illustrationid PK "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #24
      production_productmodelproductdescriptionculture {
        int4 productmodelid PK "NOT NULL"
        int4 productdescriptionid PK "NOT NULL"
        bpchar cultureid PK "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #25
      production_productsubcategory {
        serial productsubcategoryid PK "NOT NULL"
        int4 productcategoryid FK "NOT NULL"
        Name name "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #26
      purchasing_vendor {
        int4 businessentityid PK "NOT NULL"
        AccountNumber accountnumber "NOT NULL"
        Name name "NOT NULL"
        int2 creditrating "NOT NULL"
        Flag preferredvendorstatus "NOT NULL"
        Flag activeflag "NOT NULL"
        varchar purchasingwebserviceurl
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #27
      sales_countryregioncurrency {
        varchar countryregioncode PK "NOT NULL"
        bpchar currencycode PK "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #28
      sales_currencyrate {
        serial currencyrateid PK "NOT NULL"
        timestamp currencyratedate "NOT NULL"
        bpchar fromcurrencycode FK "NOT NULL"
        bpchar tocurrencycode FK "NOT NULL"
        numeric averagerate "NOT NULL"
        numeric endofdayrate "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #29
      sales_salesterritory {
        serial territoryid PK "NOT NULL"
        Name name "NOT NULL"
        varchar countryregioncode FK "NOT NULL"
        varchar group "NOT NULL"
        numeric salesytd "NOT NULL"
        numeric saleslastyear "NOT NULL"
        numeric costytd "NOT NULL"
        numeric costlastyear "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #30
      humanresources_employee {
        int4 businessentityid PK "NOT NULL"
        varchar nationalidnumber "NOT NULL"
        varchar loginid "NOT NULL"
        varchar jobtitle "NOT NULL"
        date birthdate "NOT NULL"
        bpchar maritalstatus "NOT NULL"
        bpchar gender "NOT NULL"
        date hiredate "NOT NULL"
        Flag salariedflag "NOT NULL"
        int2 vacationhours "NOT NULL"
        int2 sickleavehours "NOT NULL"
        Flag currentflag "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
        varchar organizationnode
      }

      %% Entity With No Relantionships #31
      person_businessentitycontact {
        int4 businessentityid PK "NOT NULL"
        int4 personid PK "NOT NULL"
        int4 contacttypeid PK "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #32
      person_emailaddress {
        int4 businessentityid PK "NOT NULL"
        serial emailaddressid PK "NOT NULL"
        varchar emailaddress
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #33
      person_password {
        int4 businessentityid PK "NOT NULL"
        varchar passwordhash "NOT NULL"
        varchar passwordsalt "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #34
      person_personphone {
        int4 businessentityid PK "NOT NULL"
        Phone phonenumber PK "NOT NULL"
        int4 phonenumbertypeid PK "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #35
      person_stateprovince {
        serial stateprovinceid PK "NOT NULL"
        bpchar stateprovincecode "NOT NULL"
        varchar countryregioncode FK "NOT NULL"
        Flag isonlystateprovinceflag "NOT NULL"
        Name name "NOT NULL"
        int4 territoryid FK "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #36
      production_product {
        serial productid PK "NOT NULL"
        Name name "NOT NULL"
        varchar productnumber "NOT NULL"
        Flag makeflag "NOT NULL"
        Flag finishedgoodsflag "NOT NULL"
        varchar color
        int2 safetystocklevel "NOT NULL"
        int2 reorderpoint "NOT NULL"
        numeric standardcost "NOT NULL"
        numeric listprice "NOT NULL"
        varchar size
        bpchar sizeunitmeasurecode FK
        bpchar weightunitmeasurecode FK
        numeric weight
        int4 daystomanufacture "NOT NULL"
        bpchar productline
        bpchar class
        bpchar style
        int4 productsubcategoryid FK
        int4 productmodelid FK
        timestamp sellstartdate "NOT NULL"
        timestamp sellenddate
        timestamp discontinueddate
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #37
      sales_personcreditcard {
        int4 businessentityid PK "NOT NULL"
        int4 creditcardid PK "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #38
      humanresources_employeedepartmenthistory {
        int4 businessentityid PK "NOT NULL"
        int2 departmentid PK "NOT NULL"
        int2 shiftid PK "NOT NULL"
        date startdate PK "NOT NULL"
        date enddate
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #39
      humanresources_employeepayhistory {
        int4 businessentityid PK "NOT NULL"
        timestamp ratechangedate PK "NOT NULL"
        numeric rate "NOT NULL"
        int2 payfrequency "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #40
      humanresources_jobcandidate {
        serial jobcandidateid PK "NOT NULL"
        int4 businessentityid FK
        xml resume
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #41
      person_address {
        serial addressid PK "NOT NULL"
        varchar addressline1 "NOT NULL"
        varchar addressline2
        varchar city "NOT NULL"
        int4 stateprovinceid FK "NOT NULL"
        varchar postalcode "NOT NULL"
        varchar spatiallocation
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #42
      production_billofmaterials {
        serial billofmaterialsid PK "NOT NULL"
        int4 productassemblyid FK
        int4 componentid FK "NOT NULL"
        timestamp startdate "NOT NULL"
        timestamp enddate
        bpchar unitmeasurecode FK "NOT NULL"
        int2 bomlevel "NOT NULL"
        numeric perassemblyqty "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #43
      production_document {
        varchar title "NOT NULL"
        int4 owner FK "NOT NULL"
        Flag folderflag "NOT NULL"
        varchar filename "NOT NULL"
        varchar fileextension
        bpchar revision "NOT NULL"
        int4 changenumber "NOT NULL"
        int2 status "NOT NULL"
        text documentsummary
        bytea document
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
        varchar documentnode PK "NOT NULL"
      }

      %% Entity With No Relantionships #44
      production_productcosthistory {
        int4 productid PK "NOT NULL"
        timestamp startdate PK "NOT NULL"
        timestamp enddate
        numeric standardcost "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #45
      production_productinventory {
        int4 productid PK "NOT NULL"
        int2 locationid PK "NOT NULL"
        varchar shelf "NOT NULL"
        int2 bin "NOT NULL"
        int2 quantity "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #46
      production_productlistpricehistory {
        int4 productid PK "NOT NULL"
        timestamp startdate PK "NOT NULL"
        timestamp enddate
        numeric listprice "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #47
      production_productproductphoto {
        int4 productid PK "NOT NULL"
        int4 productphotoid PK "NOT NULL"
        Flag primary "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #48
      production_transactionhistory {
        serial transactionid PK "NOT NULL"
        int4 productid FK "NOT NULL"
        int4 referenceorderid "NOT NULL"
        int4 referenceorderlineid "NOT NULL"
        timestamp transactiondate "NOT NULL"
        bpchar transactiontype "NOT NULL"
        int4 quantity "NOT NULL"
        numeric actualcost "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #49
      production_workorder {
        serial workorderid PK "NOT NULL"
        int4 productid FK "NOT NULL"
        int4 orderqty "NOT NULL"
        int2 scrappedqty "NOT NULL"
        timestamp startdate "NOT NULL"
        timestamp enddate
        timestamp duedate "NOT NULL"
        int2 scrapreasonid FK
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #50
      purchasing_productvendor {
        int4 productid PK "NOT NULL"
        int4 businessentityid PK "NOT NULL"
        int4 averageleadtime "NOT NULL"
        numeric standardprice "NOT NULL"
        numeric lastreceiptcost
        timestamp lastreceiptdate
        int4 minorderqty "NOT NULL"
        int4 maxorderqty "NOT NULL"
        int4 onorderqty
        bpchar unitmeasurecode FK "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #51
      purchasing_purchaseorderheader {
        serial purchaseorderid PK "NOT NULL"
        int2 revisionnumber "NOT NULL"
        int2 status "NOT NULL"
        int4 employeeid FK "NOT NULL"
        int4 vendorid FK "NOT NULL"
        int4 shipmethodid FK "NOT NULL"
        timestamp orderdate "NOT NULL"
        timestamp shipdate
        numeric subtotal "NOT NULL"
        numeric taxamt "NOT NULL"
        numeric freight "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #52
      sales_salesperson {
        int4 businessentityid PK "NOT NULL"
        int4 territoryid FK
        numeric salesquota
        numeric bonus "NOT NULL"
        numeric commissionpct "NOT NULL"
        numeric salesytd "NOT NULL"
        numeric saleslastyear "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #53
      sales_salestaxrate {
        serial salestaxrateid PK "NOT NULL"
        int4 stateprovinceid FK "NOT NULL"
        int2 taxtype "NOT NULL"
        numeric taxrate "NOT NULL"
        Name name "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #54
      sales_shoppingcartitem {
        serial shoppingcartitemid PK "NOT NULL"
        varchar shoppingcartid "NOT NULL"
        int4 quantity "NOT NULL"
        int4 productid FK "NOT NULL"
        timestamp datecreated "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #55
      sales_specialofferproduct {
        int4 specialofferid PK "NOT NULL"
        int4 productid PK "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #56
      person_businessentityaddress {
        int4 businessentityid PK "NOT NULL"
        int4 addressid PK "NOT NULL"
        int4 addresstypeid PK "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #57
      production_productdocument {
        int4 productid PK "NOT NULL"
        timestamp modifieddate "NOT NULL"
        varchar documentnode PK "NOT NULL"
      }

      %% Entity With No Relantionships #58
      production_workorderrouting {
        int4 workorderid PK "NOT NULL"
        int4 productid PK "NOT NULL"
        int2 operationsequence PK "NOT NULL"
        int2 locationid FK "NOT NULL"
        timestamp scheduledstartdate "NOT NULL"
        timestamp scheduledenddate "NOT NULL"
        timestamp actualstartdate
        timestamp actualenddate
        numeric actualresourcehrs
        numeric plannedcost "NOT NULL"
        numeric actualcost
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #59
      purchasing_purchaseorderdetail {
        int4 purchaseorderid PK "NOT NULL"
        serial purchaseorderdetailid PK "NOT NULL"
        timestamp duedate "NOT NULL"
        int2 orderqty "NOT NULL"
        int4 productid FK "NOT NULL"
        numeric unitprice "NOT NULL"
        numeric receivedqty "NOT NULL"
        numeric rejectedqty "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #60
      sales_salespersonquotahistory {
        int4 businessentityid PK "NOT NULL"
        timestamp quotadate PK "NOT NULL"
        numeric salesquota "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #61
      sales_salesterritoryhistory {
        int4 businessentityid PK "NOT NULL"
        int4 territoryid PK "NOT NULL"
        timestamp startdate PK "NOT NULL"
        timestamp enddate
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #62
      sales_store {
        int4 businessentityid PK "NOT NULL"
        Name name "NOT NULL"
        int4 salespersonid FK
        xml demographics
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #63
      sales_customer {
        serial customerid PK "NOT NULL"
        int4 personid FK
        int4 storeid FK
        int4 territoryid FK
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #64
      sales_salesorderheader {
        serial salesorderid PK "NOT NULL"
        int2 revisionnumber "NOT NULL"
        timestamp orderdate "NOT NULL"
        timestamp duedate "NOT NULL"
        timestamp shipdate
        int2 status "NOT NULL"
        Flag onlineorderflag "NOT NULL"
        OrderNumber purchaseordernumber
        AccountNumber accountnumber
        int4 customerid FK "NOT NULL"
        int4 salespersonid FK
        int4 territoryid FK
        int4 billtoaddressid FK "NOT NULL"
        int4 shiptoaddressid FK "NOT NULL"
        int4 shipmethodid FK "NOT NULL"
        int4 creditcardid FK
        varchar creditcardapprovalcode
        int4 currencyrateid FK
        numeric subtotal "NOT NULL"
        numeric taxamt "NOT NULL"
        numeric freight "NOT NULL"
        numeric totaldue
        varchar comment
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #65
      sales_salesorderdetail {
        int4 salesorderid PK "NOT NULL"
        serial salesorderdetailid PK "NOT NULL"
        varchar carriertrackingnumber
        int2 orderqty "NOT NULL"
        int4 productid FK "NOT NULL"
        int4 specialofferid FK "NOT NULL"
        numeric unitprice "NOT NULL"
        numeric unitpricediscount "NOT NULL"
        uuid rowguid "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #66
      sales_salesorderheadersalesreason {
        int4 salesorderid PK "NOT NULL"
        int4 salesreasonid PK "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      person_businessentity ||--o{ person_person : "[person_businessentity.businessentityid] to [person_person_businessentityid]"

      production_illustration ||--o{ production_productmodelillustration : "[production_illustration.illustrationid] to [production_productmodelillustration.illustrationid]"
      production_productmodel ||--o{ production_productmodelillustration : "[production_productmodel.productmodelid] to [production_productmodelillustration.productmodelid]"

      production_culture ||--o{ production_productmodelproductdescriptionculture : "[production_culture.cultureid] to [production_productmodelproductdescriptionculture.cultureid]"
      production_productdescription ||--o{ production_productmodelproductdescriptionculture : "[production_productdescription.productdescriptionid] to [production_productmodelproductdescriptionculture.productdescriptionid]"
      production_productmodel ||--o{ production_productmodelproductdescriptionculture : "[production_productmodel.productmodelid] to [production_productmodelproductdescriptionculture.productmodelid]"

      production_productcategory ||--o{ production_productsubcategory : "[production_productcategory.productcategoryid] to [production_productsubcategory.productcategoryid]"

      person_businessentity ||--o{ purchasing_vendor : "[person_businessentity.businessentityid] to [purchasing_vendor.businessentityid]"

      person_countryregion ||--o{ sales_countryregioncurrency : "[person_countryregion.countryregioncode] to [sales_countryregioncurrency.countryregioncode]"
      sales_currency ||--o{ sales_countryregioncurrency : "[sales_currency.currencycode] to [sales_countryregioncurrency.currencycode]"

      sales_currency ||--o{ sales_currencyrate : "[sales_currency.currencycode] to [sales_currencyrate.fromcurrencycode]"
      sales_currency ||--o{ sales_currencyrate : "[sales_currency.currencycode] to [sales_currencyrate.tocurrencycode]"

      person_countryregion ||--o{ sales_salesterritory : "[person_countryregion.countryregioncode] to [sales_salesterritory.countryregioncode]"

      person_person ||--o{ humanresources_employee : "[person_person.businessentityid] to [humanresources_employee.businessentityid]"

      person_businessentity ||--o{ person_businessentitycontact : "[person_businessentity.businessentityid] to [person_businessentitycontact.businessentityid]"
      person_contacttype ||--o{ person_businessentitycontact : "[person_contacttype.contacttypeid] to [person_businessentitycontact.contacttypeid]"
      person_person ||--o{ person_businessentitycontact : "[person_person.businessentityid] to [person_businessentitycontact.personid]"

      person_person ||--o{ person_emailaddress : "[person_person.businessentityid] to [person_emailaddress.businessentityid]"

      person_person ||--o{ person_password : "[person_person.businessentityid] to [person_password.businessentityid]"

      person_person ||--o{ person_personphone : "[person_person.businessentityid] to [person_personphone.businessentityid]"
      person_phonenumbertype ||--o{ person_personphone : "[person_phonenumbertype.phonenumbertypeid] to [person_personphone.phonenumbertypeid]"

      person_countryregion ||--o{ person_stateprovince : "[person_countryregion.countryregioncode] to [person_stateprovince.countryregioncode]"
      sales_salesterritory ||--o{ person_stateprovince : "[sales_salesterritory.territoryid] to [person_stateprovince.territoryid]"

      production_productmodel ||--o{ production_product : "[production_productmodel.productmodelid] to [production_product.productmodelid]"
      production_productsubcategory ||--o{ production_product : "[production_productsubcategory.productsubcategoryid] to [production_product.productsubcategoryid]"
      production_unitmeasure ||--o{ production_product : "[production_unitmeasure.unitmeasurecode] to [production_product.sizeunitmeasurecode]"
      production_unitmeasure ||--o{ production_product : "[production_unitmeasure.unitmeasurecode] to [production_product.weightunitmeasurecode]"

      person_person ||--o{ sales_personcreditcard : "[person_person.businessentityid] to [sales_personcreditcard.businessentityid]"
      sales_creditcard ||--o{ sales_personcreditcard : "[sales_creditcard.creditcardid] to [sales_personcreditcard.creditcardid]"

      humanresources_employee ||--o{ humanresources_employeedepartmenthistory : "[humanresources_employee.businessentityid] to [humanresources_employeedepartmenthistory.businessentityid]"
      humanresources_department ||--o{ humanresources_employeedepartmenthistory : "[humanresources_department.departmentid] to [humanresources_employeedepartmenthistory.departmentid]"
      humanresources_shift ||--o{ humanresources_employeedepartmenthistory : "[humanresources_shift.shiftid] to [humanresources_employeedepartmenthistory.shiftid]"

      humanresources_employee ||--o{ humanresources_employeepayhistory : "[humanresources_employee.businessentityid] to [humanresources_employeepayhistory.businessentityid]"

      humanresources_employee ||--o{ humanresources_jobcandidate : "[humanresources_employee.businessentityid] to [humanresources_jobcandidate.businessentityid]"

      person_stateprovince ||--o{ person_address : "[person_stateprovince.stateprovinceid] to [person_address.stateprovinceid]"

      production_product ||--o{ production_billofmaterials : "[production_product.productid] to [production_billofmaterials.componentid]"
      production_product ||--o{ production_billofmaterials : "[production_product.productid] to [production_billofmaterials.productassemblyid]"
      production_unitmeasure ||--o{ production_billofmaterials : "[production_unitmeasure.unitmeasurecode] to [production_billofmaterials.unitmeasurecode]"

      humanresources_employee ||--o{ production_document : "[humanresources_employee.businessentityid] to [production_document.owner]"

      production_product ||--o{ production_productcosthistory : "[production_product.productid] to [production_productcosthistory.productid]"

      production_location ||--o{ production_productinventory : "[production_location.locationid] to [production_productinventory.locationid]"
      production_product ||--o{ production_productinventory : "[production_product.productid] to [production_productinventory.productid]"

      production_product ||--o{ production_productlistpricehistory : "[production_product.productid] to [production_productlistpricehistory.productid]"

      production_product ||--o{ production_productproductphoto : "[production_product.productid] to [production_productproductphoto.productid]"
      production_productphoto ||--o{ production_productproductphoto : "[production_productphoto.productphotoid] to [production_productproductphoto.productphotoid]"

      production_product ||--o{ production_transactionhistory : "[production_product.productid] to [production_transactionhistory.productid]"

      production_product ||--o{ production_workorder : "[production_product.productid] to [production_workorder.productid]"
      production_scrapreason ||--o{ production_workorder : "[production_scrapreason.scrapreasonid] to [production_workorder.scrapreasonid]"

      purchasing_vendor ||--o{ purchasing_productvendor : "[purchasing_vendor.businessentityid] to [purchasing_productvendor.businessentityid]"
      production_product ||--o{ purchasing_productvendor : "[production_product.productid] to [purchasing_productvendor.productid]"
      production_unitmeasure ||--o{ purchasing_productvendor : "[production_unitmeasure.unitmeasurecode] to [purchasing_productvendor.unitmeasurecode]"

      humanresources_employee ||--o{ purchasing_purchaseorderheader : "[humanresources_employee.businessentityid] to [purchasing_purchaseorderheader.employeeid]"
      purchasing_shipmethod ||--o{ purchasing_purchaseorderheader : "[purchasing_shipmethod.shipmethodid] to [purchasing_purchaseorderheader.shipmethodid]"
      purchasing_vendor ||--o{ purchasing_purchaseorderheader : "[purchasing_vendor.businessentityid] to [purchasing_purchaseorderheader.vendorid]"

      humanresources_employee ||--o{ sales_salesperson : "[humanresources_employee.businessentityid] to [sales_salesperson.businessentityid]"
      sales_salesterritory ||--o{ sales_salesperson : "[sales_salesterritory.territoryid] to [sales_salesperson.territoryid]"

      person_stateprovince ||--o{ sales_salestaxrate : "[person_stateprovince.stateprovinceid] to [sales_salestaxrate.stateprovinceid]"

      production_product ||--o{ sales_shoppingcartitem : "[production_product.productid] to [sales_shoppingcartitem.productid]"

      production_product ||--o{ sales_specialofferproduct : "[production_product.productid] to [sales_specialofferproduct.productid]"
      sales_specialoffer ||--o{ sales_specialofferproduct : "[sales_specialoffer.specialofferid] to [sales_specialofferproduct.specialofferid]"

      person_address ||--o{ person_businessentityaddress : "[person_address.addressid] to [person_businessentityaddress.addressid]"
      person_addresstype ||--o{ person_businessentityaddress : "[person_addresstype.addresstypeid] to [person_businessentityaddress.addresstypeid]"
      person_businessentity ||--o{ person_businessentityaddress : "[person_businessentity.businessentityid] to [person_businessentityaddress.businessentityid]"

      production_document ||--o{ production_productdocument : "[production_document.documentnode] to [production_productdocument.documentnode]"
      production_product ||--o{ production_productdocument : "[production_product.productid] to [production_productdocument.productid]"

      production_location ||--o{ production_workorderrouting : "[production_location.locationid] to [production_workorderrouting.locationid]"
      production_workorder ||--o{ production_workorderrouting : "[production_workorder.workorderid] to [production_workorderrouting.workorderid]"

      production_product ||--o{ purchasing_purchaseorderdetail : "[production_product.productid] to [purchasing_purchaseorderdetail.productid]"
      purchasing_purchaseorderheader ||--o{ purchasing_purchaseorderdetail : "[purchasing_purchaseorderheader.purchaseorderid] to [purchasing_purchaseorderdetail.purchaseorderid]"

      sales_salesperson ||--o{ sales_salespersonquotahistory : "[sales_salesperson.businessentityid] to [sales_salespersonquotahistory.businessentityid]"

      sales_salesperson ||--o{ sales_salesterritoryhistory : "[sales_salesperson.businessentityid] to [sales_salesterritoryhistory.businessentityid]"
      sales_salesterritory ||--o{ sales_salesterritoryhistory : "[sales_salesterritory.territoryid] to [sales_salesterritoryhistory.territoryid]"

      person_businessentity ||--o{ sales_store : "[person_businessentity.businessentityid] to [sales_store.businessentityid]"
      sales_salesperson ||--o{ sales_store : "[sales_salesperson.businessentityid] to [sales_store.salespersonid]"

      person_person ||--o{ sales_customer : "[person_person.businessentityid] to [sales_customer.personid]"
      sales_store ||--o{ sales_customer : "[sales_store.businessentityid] to [sales_customer.storeid]"
      sales_salesterritory ||--o{ sales_customer : "[sales_salesterritory.territoryid] to [sales_customer.territoryid]"

      person_address ||--o{ sales_salesorderheader : "[person_address.addressid] to [sales_salesorderheader.billtoaddressid]"
      sales_creditcard ||--o{ sales_salesorderheader : "[sales_creditcard.creditcardid] to [sales_salesorderheader.creditcardid]"
      sales_currencyrate ||--o{ sales_salesorderheader : "[sales_currencyrate.currencyrateid] to [sales_salesorderheader.currencyrateid]"
      sales_customer ||--o{ sales_salesorderheader : "[sales_customer.customerid] to [sales_salesorderheader.customerid]"
      sales_salesperson ||--o{ sales_salesorderheader : "[sales_salesperson.businessentityid] to [sales_salesorderheader.salespersonid]"
      purchasing_shipmethod ||--o{ sales_salesorderheader : "[purchasing_shipmethod.shipmethodid] to [sales_salesorderheader.shipmethodid]"
      person_address ||--o{ sales_salesorderheader : "[person_address.addressid] to [sales_salesorderheader.shiptoaddressid]"
      sales_salesterritory ||--o{ sales_salesorderheader : "[sales_salesterritory.territoryid] to [sales_salesorderheader.territoryid]"

      sales_salesorderheader ||--o{ sales_salesorderdetail : "[sales_salesorderheader.salesorderid] to [sales_salesorderdetail.salesorderid]"
      sales_specialofferproduct ||--o{ sales_salesorderdetail : "[sales_specialofferproduct.specialofferid, sales_specialofferproduct.productid] to [sales_salesorderdetail.specialofferid, sales_salesorderdetail.productid]"

      sales_salesorderheader ||--o{ sales_salesorderheadersalesreason : "[sales_salesorderheader.salesorderid] to [sales_salesorderheadersalesreason.salesorderid]"
      sales_salesreason ||--o{ sales_salesorderheadersalesreason : "[sales_salesreason.salesreasonid] to [sales_salesorderheadersalesreason.salesreasonid]"

    ```
* Diagram-2
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #1
      production_productreview {
        serial productreviewid PK "NOT NULL"
        int4 productid "NOT NULL"
        Name reviewername "NOT NULL"
        timestamp reviewdate "NOT NULL"
        varchar emailaddress "NOT NULL"
        int4 rating "NOT NULL"
        varchar comments
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #2
      production_transactionhistoryarchive {
        int4 transactionid PK "NOT NULL"
        int4 productid "NOT NULL"
        int4 referenceorderid "NOT NULL"
        int4 referenceorderlineid "NOT NULL"
        timestamp transactiondate "NOT NULL"
        bpchar transactiontype "NOT NULL"
        int4 quantity "NOT NULL"
        numeric actualcost "NOT NULL"
        timestamp modifieddate "NOT NULL"
      }

      %% Entity With No Relantionships #3
      hr_d {
        int4 id
        int4 departmentid
        Name name
        Name groupname
        timestamp modifieddate
      }

      %% Entity With No Relantionships #4
      hr_e {
        int4 id
        int4 businessentityid
        varchar nationalidnumber
        varchar loginid
        varchar jobtitle
        date birthdate
        bpchar maritalstatus
        bpchar gender
        date hiredate
        Flag salariedflag "NOT NULL"
        int2 vacationhours
        int2 sickleavehours
        Flag currentflag "NOT NULL"
        uuid rowguid
        timestamp modifieddate
        varchar organizationnode
      }

      %% Entity With No Relantionships #5
      hr_edh {
        int4 id
        int4 businessentityid
        int2 departmentid
        int2 shiftid
        date startdate
        date enddate
        timestamp modifieddate
      }

    ```
* Diagram-3
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #6
      hr_eph {
        int4 id
        int4 businessentityid
        timestamp ratechangedate
        numeric rate
        int2 payfrequency
        timestamp modifieddate
      }

      %% Entity With No Relantionships #7
      hr_jc {
        int4 id
        int4 jobcandidateid
        int4 businessentityid
        xml resume
        timestamp modifieddate
      }

      %% Entity With No Relantionships #8
      hr_s {
        int4 id
        int4 shiftid
        Name name
        time starttime
        time endtime
        timestamp modifieddate
      }

      %% Entity With No Relantionships #9
      humanresources_vemployee {
        int4 businessentityid
        varchar title
        Name firstname
        Name middlename
        Name lastname
        varchar suffix
        varchar jobtitle
        Phone phonenumber
        Name phonenumbertype
        varchar emailaddress
        int4 emailpromotion
        varchar addressline1
        varchar addressline2
        varchar city
        Name stateprovincename
        varchar postalcode
        Name countryregionname
        xml additionalcontactinfo
      }

      %% Entity With No Relantionships #10
      humanresources_vemployeedepartment {
        int4 businessentityid
        varchar title
        Name firstname
        Name middlename
        Name lastname
        varchar suffix
        varchar jobtitle
        Name department
        Name groupname
        date startdate
      }

    ```
* Diagram-4
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #11
      humanresources_vemployeedepartmenthistory {
        int4 businessentityid
        varchar title
        Name firstname
        Name middlename
        Name lastname
        varchar suffix
        Name shift
        Name department
        Name groupname
        date startdate
        date enddate
      }

      %% Entity With No Relantionships #12
      humanresources_vjobcandidate {
        int4 jobcandidateid
        int4 businessentityid
        varchar Name_Prefix "'Name.Prefix'"
        varchar Name_First "'Name.First'"
        varchar Name_Middle "'Name.Middle'"
        varchar Name_Last "'Name.Last'"
        varchar Name_Suffix "'Name.Suffix'"
        varchar Skills
        varchar Addr_Type "'Addr.Type'"
        varchar Addr_Loc_CountryRegion "'Addr.Loc.CountryRegion'"
        varchar Addr_Loc_State "'Addr.Loc.State'"
        varchar Addr_Loc_City "'Addr.Loc.City'"
        varchar Addr_PostalCode "'Addr.PostalCode'"
        varchar EMail
        varchar WebSite
        timestamp modifieddate
      }

      %% Entity With No Relantionships #13
      humanresources_vjobcandidateeducation {
        int4 jobcandidateid
        varchar Edu_Level "'Edu.Level'"
        date Edu_StartDate "'Edu.StartDate'"
        date Edu_EndDate "'Edu.EndDate'"
        varchar Edu_Degree "'Edu.Degree'"
        varchar Edu_Major "'Edu.Major'"
        varchar Edu_Minor "'Edu.Minor'"
        varchar Edu_GPA "'Edu.GPA'"
        varchar Edu_GPAScale "'Edu.GPAScale'"
        varchar Edu_School "'Edu.School'"
        varchar Edu_Loc_CountryRegion "'Edu.Loc.CountryRegion'"
        varchar Edu_Loc_State "'Edu.Loc.State'"
        varchar Edu_Loc_City "'Edu.Loc.City'"
      }

      %% Entity With No Relantionships #14
      humanresources_vjobcandidateemployment {
        int4 jobcandidateid
        date Emp_StartDate "'Emp.StartDate'"
        date Emp_EndDate "'Emp.EndDate'"
        varchar Emp_OrgName "'Emp.OrgName'"
        varchar Emp_JobTitle "'Emp.JobTitle'"
        varchar Emp_Responsibility "'Emp.Responsibility'"
        varchar Emp_FunctionCategory "'Emp.FunctionCategory'"
        varchar Emp_IndustryCategory "'Emp.IndustryCategory'"
        varchar Emp_Loc_CountryRegion "'Emp.Loc.CountryRegion'"
        varchar Emp_Loc_State "'Emp.Loc.State'"
        varchar Emp_Loc_City "'Emp.Loc.City'"
      }

      %% Entity With No Relantionships #15
      pe_a {
        int4 id
        int4 addressid
        varchar addressline1
        varchar addressline2
        varchar city
        int4 stateprovinceid
        varchar postalcode
        varchar spatiallocation
        uuid rowguid
        timestamp modifieddate
      }

    ```
* Diagram-5
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #16
      pe_at {
        int4 id
        int4 addresstypeid
        Name name
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #17
      pe_be {
        int4 id
        int4 businessentityid
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #18
      pe_bea {
        int4 id
        int4 businessentityid
        int4 addressid
        int4 addresstypeid
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #19
      pe_bec {
        int4 id
        int4 businessentityid
        int4 personid
        int4 contacttypeid
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #20
      pe_cr {
        varchar countryregioncode
        Name name
        timestamp modifieddate
      }

    ```
* Diagram-6
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #21
      pe_ct {
        int4 id
        int4 contacttypeid
        Name name
        timestamp modifieddate
      }

      %% Entity With No Relantionships #22
      pe_e {
        int4 id
        int4 businessentityid
        int4 emailaddressid
        varchar emailaddress
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #23
      pe_p {
        int4 id
        int4 businessentityid
        bpchar persontype
        NameStyle namestyle "NOT NULL"
        varchar title
        Name firstname
        Name middlename
        Name lastname
        varchar suffix
        int4 emailpromotion
        xml additionalcontactinfo
        xml demographics
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #24
      pe_pa {
        int4 id
        int4 businessentityid
        varchar passwordhash
        varchar passwordsalt
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #25
      pe_pnt {
        int4 id
        int4 phonenumbertypeid
        Name name
        timestamp modifieddate
      }

    ```
* Diagram-7
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #26
      pe_pp {
        int4 id
        int4 businessentityid
        Phone phonenumber
        int4 phonenumbertypeid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #27
      pe_sp {
        int4 id
        int4 stateprovinceid
        bpchar stateprovincecode
        varchar countryregioncode
        Flag isonlystateprovinceflag "NOT NULL"
        Name name
        int4 territoryid
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #28
      person_vadditionalcontactinfo {
        int4 businessentityid
        Name firstname
        Name middlename
        Name lastname
        xml telephonenumber
        text telephonespecialinstructions
        xml street
        xml city
        xml stateprovince
        xml postalcode
        xml countryregion
        xml homeaddressspecialinstructions
        xml emailaddress
        text emailspecialinstructions
        xml emailtelephonenumber
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #29
      pr_bom {
        int4 id
        int4 billofmaterialsid
        int4 productassemblyid
        int4 componentid
        timestamp startdate
        timestamp enddate
        bpchar unitmeasurecode
        int2 bomlevel
        numeric perassemblyqty
        timestamp modifieddate
      }

      %% Entity With No Relantionships #30
      pr_c {
        bpchar id
        bpchar cultureid
        Name name
        timestamp modifieddate
      }

    ```
* Diagram-8
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #31
      pr_d {
        varchar title
        int4 owner
        Flag folderflag "NOT NULL"
        varchar filename
        varchar fileextension
        bpchar revision
        int4 changenumber
        int2 status
        text documentsummary
        bytea document
        uuid rowguid
        timestamp modifieddate
        varchar documentnode
      }

      %% Entity With No Relantionships #32
      pr_i {
        int4 id
        int4 illustrationid
        xml diagram
        timestamp modifieddate
      }

      %% Entity With No Relantionships #33
      pr_l {
        int4 id
        int4 locationid
        Name name
        numeric costrate
        numeric availability
        timestamp modifieddate
      }

      %% Entity With No Relantionships #34
      pr_p {
        int4 id
        int4 productid
        Name name
        varchar productnumber
        Flag makeflag "NOT NULL"
        Flag finishedgoodsflag "NOT NULL"
        varchar color
        int2 safetystocklevel
        int2 reorderpoint
        numeric standardcost
        numeric listprice
        varchar size
        bpchar sizeunitmeasurecode
        bpchar weightunitmeasurecode
        numeric weight
        int4 daystomanufacture
        bpchar productline
        bpchar class
        bpchar style
        int4 productsubcategoryid
        int4 productmodelid
        timestamp sellstartdate
        timestamp sellenddate
        timestamp discontinueddate
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #35
      pr_pc {
        int4 id
        int4 productcategoryid
        Name name
        uuid rowguid
        timestamp modifieddate
      }

    ```
* Diagram-9
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #36
      pr_pch {
        int4 id
        int4 productid
        timestamp startdate
        timestamp enddate
        numeric standardcost
        timestamp modifieddate
      }

      %% Entity With No Relantionships #37
      pr_pd {
        int4 id
        int4 productdescriptionid
        varchar description
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #38
      pr_pdoc {
        int4 id
        int4 productid
        timestamp modifieddate
        varchar documentnode
      }

      %% Entity With No Relantionships #39
      pr_pi {
        int4 id
        int4 productid
        int2 locationid
        varchar shelf
        int2 bin
        int2 quantity
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #40
      pr_plph {
        int4 id
        int4 productid
        timestamp startdate
        timestamp enddate
        numeric listprice
        timestamp modifieddate
      }

    ```
* Diagram-10
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #41
      pr_pm {
        int4 id
        int4 productmodelid
        Name name
        xml catalogdescription
        xml instructions
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #42
      pr_pmi {
        int4 productmodelid
        int4 illustrationid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #43
      pr_pmpdc {
        int4 productmodelid
        int4 productdescriptionid
        bpchar cultureid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #44
      pr_pp {
        int4 id
        int4 productphotoid
        bytea thumbnailphoto
        varchar thumbnailphotofilename
        bytea largephoto
        varchar largephotofilename
        timestamp modifieddate
      }

      %% Entity With No Relantionships #45
      pr_ppp {
        int4 productid
        int4 productphotoid
        Flag primary "NOT NULL"
        timestamp modifieddate
      }

    ```
* Diagram-11
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #46
      pr_pr {
        int4 id
        int4 productreviewid
        int4 productid
        Name reviewername
        timestamp reviewdate
        varchar emailaddress
        int4 rating
        varchar comments
        timestamp modifieddate
      }

      %% Entity With No Relantionships #47
      pr_psc {
        int4 id
        int4 productsubcategoryid
        int4 productcategoryid
        Name name
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #48
      pr_sr {
        int4 id
        int4 scrapreasonid
        Name name
        timestamp modifieddate
      }

      %% Entity With No Relantionships #49
      pr_th {
        int4 id
        int4 transactionid
        int4 productid
        int4 referenceorderid
        int4 referenceorderlineid
        timestamp transactiondate
        bpchar transactiontype
        int4 quantity
        numeric actualcost
        timestamp modifieddate
      }

      %% Entity With No Relantionships #50
      pr_tha {
        int4 id
        int4 transactionid
        int4 productid
        int4 referenceorderid
        int4 referenceorderlineid
        timestamp transactiondate
        bpchar transactiontype
        int4 quantity
        numeric actualcost
        timestamp modifieddate
      }

    ```
* Diagram-12
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #51
      pr_um {
        bpchar id
        bpchar unitmeasurecode
        Name name
        timestamp modifieddate
      }

      %% Entity With No Relantionships #52
      pr_w {
        int4 id
        int4 workorderid
        int4 productid
        int4 orderqty
        int2 scrappedqty
        timestamp startdate
        timestamp enddate
        timestamp duedate
        int2 scrapreasonid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #53
      pr_wr {
        int4 id
        int4 workorderid
        int4 productid
        int2 operationsequence
        int2 locationid
        timestamp scheduledstartdate
        timestamp scheduledenddate
        timestamp actualstartdate
        timestamp actualenddate
        numeric actualresourcehrs
        numeric plannedcost
        numeric actualcost
        timestamp modifieddate
      }

      %% Entity With No Relantionships #54
      production_vproductmodelcatalogdescription {
        int4 productmodelid
        Name name
        varchar Summary
        varchar manufacturer
        varchar copyright
        varchar producturl
        varchar warrantyperiod
        varchar warrantydescription
        varchar noofyears
        varchar maintenancedescription
        varchar wheel
        varchar saddle
        varchar pedal
        varchar bikeframe
        varchar crankset
        varchar pictureangle
        varchar picturesize
        varchar productphotoid
        varchar material
        varchar color
        varchar productline
        varchar style
        varchar riderexperience
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #55
      production_vproductmodelinstructions {
        int4 productmodelid
        Name name
        varchar instructions
        int4 LocationID
        numeric SetupHours
        numeric MachineHours
        numeric LaborHours
        int4 LotSize
        varchar Step
        uuid rowguid
        timestamp modifieddate
      }

    ```
* Diagram-13
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #56
      pu_pod {
        int4 id
        int4 purchaseorderid
        int4 purchaseorderdetailid
        timestamp duedate
        int2 orderqty
        int4 productid
        numeric unitprice
        numeric receivedqty
        numeric rejectedqty
        timestamp modifieddate
      }

      %% Entity With No Relantionships #57
      pu_poh {
        int4 id
        int4 purchaseorderid
        int2 revisionnumber
        int2 status
        int4 employeeid
        int4 vendorid
        int4 shipmethodid
        timestamp orderdate
        timestamp shipdate
        numeric subtotal
        numeric taxamt
        numeric freight
        timestamp modifieddate
      }

      %% Entity With No Relantionships #58
      pu_pv {
        int4 id
        int4 productid
        int4 businessentityid
        int4 averageleadtime
        numeric standardprice
        numeric lastreceiptcost
        timestamp lastreceiptdate
        int4 minorderqty
        int4 maxorderqty
        int4 onorderqty
        bpchar unitmeasurecode
        timestamp modifieddate
      }

      %% Entity With No Relantionships #59
      pu_sm {
        int4 id
        int4 shipmethodid
        Name name
        numeric shipbase
        numeric shiprate
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #60
      pu_v {
        int4 id
        int4 businessentityid
        AccountNumber accountnumber
        Name name
        int2 creditrating
        Flag preferredvendorstatus "NOT NULL"
        Flag activeflag "NOT NULL"
        varchar purchasingwebserviceurl
        timestamp modifieddate
      }

    ```
* Diagram-14
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #61
      purchasing_vvendorwithaddresses {
        int4 businessentityid
        Name name
        Name addresstype
        varchar addressline1
        varchar addressline2
        varchar city
        Name stateprovincename
        varchar postalcode
        Name countryregionname
      }

      %% Entity With No Relantionships #62
      purchasing_vvendorwithcontacts {
        int4 businessentityid
        Name name
        Name contacttype
        varchar title
        Name firstname
        Name middlename
        Name lastname
        varchar suffix
        Phone phonenumber
        Name phonenumbertype
        varchar emailaddress
        int4 emailpromotion
      }

      %% Entity With No Relantionships #63
      sa_c {
        int4 id
        int4 customerid
        int4 personid
        int4 storeid
        int4 territoryid
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #64
      sa_cc {
        int4 id
        int4 creditcardid
        varchar cardtype
        varchar cardnumber
        int2 expmonth
        int2 expyear
        timestamp modifieddate
      }

      %% Entity With No Relantionships #65
      sa_cr {
        int4 currencyrateid
        timestamp currencyratedate
        bpchar fromcurrencycode
        bpchar tocurrencycode
        numeric averagerate
        numeric endofdayrate
        timestamp modifieddate
      }

    ```
* Diagram-15
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #66
      sa_crc {
        varchar countryregioncode
        bpchar currencycode
        timestamp modifieddate
      }

      %% Entity With No Relantionships #67
      sa_cu {
        bpchar id
        bpchar currencycode
        Name name
        timestamp modifieddate
      }

      %% Entity With No Relantionships #68
      sa_pcc {
        int4 id
        int4 businessentityid
        int4 creditcardid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #69
      sa_s {
        int4 id
        int4 businessentityid
        Name name
        int4 salespersonid
        xml demographics
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #70
      sa_sci {
        int4 id
        int4 shoppingcartitemid
        varchar shoppingcartid
        int4 quantity
        int4 productid
        timestamp datecreated
        timestamp modifieddate
      }

    ```
* Diagram-16
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #71
      sa_so {
        int4 id
        int4 specialofferid
        varchar description
        numeric discountpct
        varchar type
        varchar category
        timestamp startdate
        timestamp enddate
        int4 minqty
        int4 maxqty
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #72
      sa_sod {
        int4 id
        int4 salesorderid
        int4 salesorderdetailid
        varchar carriertrackingnumber
        int2 orderqty
        int4 productid
        int4 specialofferid
        numeric unitprice
        numeric unitpricediscount
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #73
      sa_soh {
        int4 id
        int4 salesorderid
        int2 revisionnumber
        timestamp orderdate
        timestamp duedate
        timestamp shipdate
        int2 status
        Flag onlineorderflag "NOT NULL"
        OrderNumber purchaseordernumber
        AccountNumber accountnumber
        int4 customerid
        int4 salespersonid
        int4 territoryid
        int4 billtoaddressid
        int4 shiptoaddressid
        int4 shipmethodid
        int4 creditcardid
        varchar creditcardapprovalcode
        int4 currencyrateid
        numeric subtotal
        numeric taxamt
        numeric freight
        numeric totaldue
        varchar comment
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #74
      sa_sohsr {
        int4 salesorderid
        int4 salesreasonid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #75
      sa_sop {
        int4 id
        int4 specialofferid
        int4 productid
        uuid rowguid
        timestamp modifieddate
      }

    ```
* Diagram-17
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #76
      sa_sp {
        int4 id
        int4 businessentityid
        int4 territoryid
        numeric salesquota
        numeric bonus
        numeric commissionpct
        numeric salesytd
        numeric saleslastyear
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #77
      sa_spqh {
        int4 id
        int4 businessentityid
        timestamp quotadate
        numeric salesquota
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #78
      sa_sr {
        int4 id
        int4 salesreasonid
        Name name
        Name reasontype
        timestamp modifieddate
      }

      %% Entity With No Relantionships #79
      sa_st {
        int4 id
        int4 territoryid
        Name name
        varchar countryregioncode
        varchar group
        numeric salesytd
        numeric saleslastyear
        numeric costytd
        numeric costlastyear
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #80
      sa_sth {
        int4 id
        int4 businessentityid
        int4 territoryid
        timestamp startdate
        timestamp enddate
        uuid rowguid
        timestamp modifieddate
      }

    ```
* Diagram-18
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #81
      sa_tr {
        int4 id
        int4 salestaxrateid
        int4 stateprovinceid
        int2 taxtype
        numeric taxrate
        Name name
        uuid rowguid
        timestamp modifieddate
      }

      %% Entity With No Relantionships #82
      sales_vindividualcustomer {
        int4 businessentityid
        varchar title
        Name firstname
        Name middlename
        Name lastname
        varchar suffix
        Phone phonenumber
        Name phonenumbertype
        varchar emailaddress
        int4 emailpromotion
        Name addresstype
        varchar addressline1
        varchar addressline2
        varchar city
        Name stateprovincename
        varchar postalcode
        Name countryregionname
        xml demographics
      }

      %% Entity With No Relantionships #83
      sales_vpersondemographics {
        int4 businessentityid
        money totalpurchaseytd
        date datefirstpurchase
        date birthdate
        varchar maritalstatus
        varchar yearlyincome
        varchar gender
        int4 totalchildren
        int4 numberchildrenathome
        varchar education
        varchar occupation
        bool homeownerflag
        int4 numbercarsowned
      }

      %% Entity With No Relantionships #84
      sales_vsalesperson {
        int4 businessentityid
        varchar title
        Name firstname
        Name middlename
        Name lastname
        varchar suffix
        varchar jobtitle
        Phone phonenumber
        Name phonenumbertype
        varchar emailaddress
        int4 emailpromotion
        varchar addressline1
        varchar addressline2
        varchar city
        Name stateprovincename
        varchar postalcode
        Name countryregionname
        Name territoryname
        varchar territorygroup
        numeric salesquota
        numeric salesytd
        numeric saleslastyear
      }

      %% Entity With No Relantionships #85
      sales_vsalespersonsalesbyfiscalyears {
        int4 SalesPersonID
        text FullName
        text JobTitle
        text SalesTerritory
        numeric r2012 "'2012'"
        numeric r2013 "'2013'"
        numeric r2014 "'2014'"
      }

    ```
* Diagram-19
    ```mermaid
    erDiagram

      %% Entity With No Relantionships #86
      sales_vsalespersonsalesbyfiscalyearsdata {
        int4 salespersonid
        text fullname
        varchar jobtitle
        Name salesterritory
        numeric salestotal
        numeric fiscalyear
      }

      %% Entity With No Relantionships #87
      sales_vstorewithaddresses {
        int4 businessentityid
        Name name
        Name addresstype
        varchar addressline1
        varchar addressline2
        varchar city
        Name stateprovincename
        varchar postalcode
        Name countryregionname
      }

      %% Entity With No Relantionships #88
      sales_vstorewithcontacts {
        int4 businessentityid
        Name name
        Name contacttype
        varchar title
        Name firstname
        Name middlename
        Name lastname
        varchar suffix
        Phone phonenumber
        Name phonenumbertype
        varchar emailaddress
        int4 emailpromotion
      }

      %% Entity With No Relantionships #89
      sales_vstorewithdemographics {
        int4 businessentityid
        Name name
        money AnnualSales
        money AnnualRevenue
        varchar BankName
        varchar BusinessType
        int4 YearOpened
        varchar Specialty
        int4 SquareFeet
        varchar Brands
        varchar Internet
        int4 NumberEmployees
      }

    ```
## Summary:
* Entities with Relationships:66
* Entities without Relationships:89
* Total Entities:155
