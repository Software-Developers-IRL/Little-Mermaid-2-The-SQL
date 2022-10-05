# Mermaid erDiagram
* generated using schemacrawler on:2022-10-05
* using Little-Mermaid-2-TheSQL formatting

```mermaid
erDiagram

  adventureworks_addresstype {
    INT AddressTypeID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productsubcategory {
    INT ProductSubcategoryID PK "NOT NULL"
    INT ProductCategoryID FK "NOT NULL"
    VARCHAR Name "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_awbuildversion {
    INT SystemInformationID PK "NOT NULL"
    VARCHAR DatabaseVersion "'Database Version' NOT NULL"
    DATETIME VersionDate "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_contacttype {
    INT ContactTypeID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_countryregion {
    VARCHAR CountryRegionCode PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_countryregioncurrency {
    VARCHAR CountryRegionCode PK "NOT NULL"
    VARCHAR CurrencyCode PK "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_creditcard {
    INT CreditCardID PK "NOT NULL"
    VARCHAR CardType "NOT NULL"
    VARCHAR CardNumber "NOT NULL"
    TINYINT ExpMonth "NOT NULL"
    SMALLINT ExpYear "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_culture {
    VARCHAR CultureID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_currency {
    VARCHAR CurrencyCode PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_currencyrate {
    INT CurrencyRateID PK "NOT NULL"
    DATETIME CurrencyRateDate "NOT NULL"
    VARCHAR FromCurrencyCode "NOT NULL"
    VARCHAR ToCurrencyCode "NOT NULL"
    DOUBLE AverageRate "NOT NULL"
    DOUBLE EndOfDayRate "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_department {
    SMALLINT DepartmentID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    VARCHAR GroupName "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_illustration {
    INT IllustrationID PK "NOT NULL"
    TEXT Diagram
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_location {
    SMALLINT LocationID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    DOUBLE CostRate "NOT NULL"
    DECIMAL Availability "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productcategory {
    INT ProductCategoryID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productdescription {
    INT ProductDescriptionID PK "NOT NULL"
    MEDIUMTEXT Description "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productmodel {
    INT ProductModelID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    TEXT CatalogDescription
    TEXT Instructions
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productphoto {
    INT ProductPhotoID PK "NOT NULL"
    BLOB ThumbNailPhoto
    VARCHAR ThumbnailPhotoFileName
    BLOB LargePhoto
    VARCHAR LargePhotoFileName
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_salesreason {
    INT SalesReasonID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    VARCHAR ReasonType "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_salestaxrate {
    INT SalesTaxRateID PK "NOT NULL"
    INT StateProvinceID "NOT NULL"
    TINYINT TaxType "NOT NULL"
    DOUBLE TaxRate "NOT NULL"
    VARCHAR Name "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_scrapreason {
    SMALLINT ScrapReasonID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_shift {
    TINYINT ShiftID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    DATETIME StartTime "NOT NULL"
    DATETIME EndTime "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_shipmethod {
    INT ShipMethodID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    DOUBLE ShipBase "NOT NULL"
    DOUBLE ShipRate "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_unitmeasure {
    VARCHAR UnitMeasureCode PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  mockDb___EFMigrationsHistory {
    VARCHAR MigrationId PK "NOT NULL"
    VARCHAR ProductVersion "NOT NULL"
  }

  mockDb_account_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR type "NOT NULL"
  }

  mockDb_configuration {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
  }

  mockDb_jobs {
    BIGINT id PK "NOT NULL"
    VARCHAR queue "NOT NULL"
    LONGTEXT payload "NOT NULL"
    TINYINT UNSIGNED attempts "NOT NULL"
    TINYINT UNSIGNED reserved "NOT NULL"
    INT reserved_at
    INT available_at "NOT NULL"
    INT created_at "NOT NULL"
  }

  mockDb_link_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR name "NOT NULL"
    VARCHAR outward "NOT NULL"
    VARCHAR inward "NOT NULL"
    TINYINT UNSIGNED editable "NOT NULL"
  }

  mockDb_locations {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    DECIMAL latitude
    DECIMAL longitude
    SMALLINT zoom_level
  }

  mockDb_notes {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT noteable_id "NOT NULL"
    VARCHAR noteable_type "NOT NULL"
    VARCHAR title
    LONGTEXT text
  }

  mockDb_oauth_access_tokens {
    VARCHAR id PK "NOT NULL"
    INT user_id
    INT client_id "NOT NULL"
    VARCHAR name
    TEXT scopes
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME expires_at
  }

  mockDb_oauth_auth_codes {
    VARCHAR id PK "NOT NULL"
    TEXT user_id
    INT client_id "NOT NULL"
    TEXT scopes
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME expires_at
  }

  mockDb_oauth_clients {
    INT id PK "NOT NULL"
    INT user_id
    VARCHAR name "NOT NULL"
    VARCHAR secret
    TEXT redirect "NOT NULL"
    TINYINT UNSIGNED personal_access_client "NOT NULL"
    TINYINT UNSIGNED password_client "NOT NULL"
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    TEXT provider
  }

  mockDb_oauth_personal_access_clients {
    INT id PK "NOT NULL"
    INT client_id "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
  }

  mockDb_oauth_refresh_tokens {
    VARCHAR id PK "NOT NULL"
    VARCHAR access_token_id "NOT NULL"
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME expires_at
  }

  mockDb_permissions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR name "NOT NULL"
    VARCHAR display_name
    VARCHAR description
  }

  mockDb_Roles {
    VARCHAR Id PK "NOT NULL"
    VARCHAR name "NOT NULL"
    VARCHAR NormalizedName
    TEXT ConcurrencyStamp
    TEXT Discriminator "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR display_name
    VARCHAR description
  }

  mockDb_transaction_currencies {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    TINYINT UNSIGNED enabled "NOT NULL"
    VARCHAR code "NOT NULL"
    VARCHAR name "NOT NULL"
    VARCHAR symbol "NOT NULL"
    SMALLINT decimal_places "NOT NULL"
  }

  mockDb_transaction_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR type "NOT NULL"
  }

  mockDb_Users {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR UserName
    VARCHAR NormalizedUserName
    VARCHAR Email
    VARCHAR NormalizedEmail
    INT EmailConfirmed "NOT NULL"
    TEXT PasswordHash
    TEXT SecurityStamp
    TEXT ConcurrencyStamp
    TEXT PhoneNumber
    INT PhoneNumberConfirmed "NOT NULL"
    INT TwoFactorEnabled "NOT NULL"
    TIMESTAMP LockoutEnd
    INT LockoutEnabled "NOT NULL"
    INT AccessFailedCount "NOT NULL"
    TEXT Discriminator "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR remember_token
  }

  oyb_test___EFMigrationsHistory {
    VARCHAR MigrationId PK "NOT NULL"
    VARCHAR ProductVersion "NOT NULL"
  }

  oyb_test_account_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR type "NOT NULL"
  }

  oyb_test_configuration {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
  }

  oyb_test_jobs {
    BIGINT id PK "NOT NULL"
    VARCHAR queue "NOT NULL"
    LONGTEXT payload "NOT NULL"
    TINYINT UNSIGNED attempts "NOT NULL"
    TINYINT UNSIGNED reserved "NOT NULL"
    INT reserved_at
    INT available_at "NOT NULL"
    INT created_at "NOT NULL"
  }

  oyb_test_link_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR name "NOT NULL"
    VARCHAR outward "NOT NULL"
    VARCHAR inward "NOT NULL"
    TINYINT UNSIGNED editable "NOT NULL"
  }

  oyb_test_locations {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    DECIMAL latitude
    DECIMAL longitude
    SMALLINT zoom_level
  }

  oyb_test_notes {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT noteable_id "NOT NULL"
    VARCHAR noteable_type "NOT NULL"
    VARCHAR title
    LONGTEXT text
  }

  oyb_test_oauth_access_tokens {
    VARCHAR id PK "NOT NULL"
    INT user_id
    INT client_id "NOT NULL"
    VARCHAR name
    TEXT scopes
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME expires_at
  }

  oyb_test_oauth_auth_codes {
    VARCHAR id PK "NOT NULL"
    TEXT user_id
    INT client_id "NOT NULL"
    TEXT scopes
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME expires_at
  }

  oyb_test_oauth_clients {
    INT id PK "NOT NULL"
    INT user_id
    VARCHAR name "NOT NULL"
    VARCHAR secret
    TEXT redirect "NOT NULL"
    TINYINT UNSIGNED personal_access_client "NOT NULL"
    TINYINT UNSIGNED password_client "NOT NULL"
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    TEXT provider
  }

  oyb_test_oauth_personal_access_clients {
    INT id PK "NOT NULL"
    INT client_id "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
  }

  oyb_test_oauth_refresh_tokens {
    VARCHAR id PK "NOT NULL"
    VARCHAR access_token_id "NOT NULL"
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME expires_at
  }

  oyb_test_permissions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR name "NOT NULL"
    VARCHAR display_name
    VARCHAR description
  }

  oyb_test_Roles {
    VARCHAR Id PK "NOT NULL"
    VARCHAR name "NOT NULL"
    VARCHAR NormalizedName
    TEXT ConcurrencyStamp
    TEXT Discriminator "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR display_name
    VARCHAR description
  }

  oyb_test_transaction_currencies {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    TINYINT UNSIGNED enabled "NOT NULL"
    VARCHAR code "NOT NULL"
    VARCHAR name "NOT NULL"
    VARCHAR symbol "NOT NULL"
    SMALLINT decimal_places "NOT NULL"
  }

  oyb_test_transaction_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR type "NOT NULL"
  }

  oyb_test_Users {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR UserName
    VARCHAR NormalizedUserName
    VARCHAR Email
    VARCHAR NormalizedEmail
    INT EmailConfirmed "NOT NULL"
    TEXT PasswordHash
    TEXT SecurityStamp
    TEXT ConcurrencyStamp
    TEXT PhoneNumber
    INT PhoneNumberConfirmed "NOT NULL"
    INT TwoFactorEnabled "NOT NULL"
    TIMESTAMP LockoutEnd
    INT LockoutEnabled "NOT NULL"
    INT AccessFailedCount "NOT NULL"
    TEXT Discriminator "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR remember_token
  }

  oybDb___EFMigrationsHistory {
    VARCHAR MigrationId PK "NOT NULL"
    VARCHAR ProductVersion "NOT NULL"
  }

  oybDb_account_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR type "NOT NULL"
  }

  oybDb_configuration {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
  }

  oybDb_jobs {
    BIGINT id PK "NOT NULL"
    VARCHAR queue "NOT NULL"
    LONGTEXT payload "NOT NULL"
    TINYINT UNSIGNED attempts "NOT NULL"
    TINYINT UNSIGNED reserved "NOT NULL"
    INT reserved_at
    INT available_at "NOT NULL"
    INT created_at "NOT NULL"
  }

  oybDb_link_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR name "NOT NULL"
    VARCHAR outward "NOT NULL"
    VARCHAR inward "NOT NULL"
    TINYINT UNSIGNED editable "NOT NULL"
  }

  oybDb_locations {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    DECIMAL latitude
    DECIMAL longitude
    SMALLINT zoom_level
  }

  oybDb_notes {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT noteable_id "NOT NULL"
    VARCHAR noteable_type "NOT NULL"
    VARCHAR title
    LONGTEXT text
  }

  oybDb_oauth_access_tokens {
    VARCHAR id PK "NOT NULL"
    INT user_id
    INT client_id "NOT NULL"
    VARCHAR name
    TEXT scopes
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME expires_at
  }

  oybDb_oauth_auth_codes {
    VARCHAR id PK "NOT NULL"
    TEXT user_id
    INT client_id "NOT NULL"
    TEXT scopes
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME expires_at
  }

  oybDb_oauth_clients {
    INT id PK "NOT NULL"
    INT user_id
    VARCHAR name "NOT NULL"
    VARCHAR secret
    TEXT redirect "NOT NULL"
    TINYINT UNSIGNED personal_access_client "NOT NULL"
    TINYINT UNSIGNED password_client "NOT NULL"
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    TEXT provider
  }

  oybDb_oauth_personal_access_clients {
    INT id PK "NOT NULL"
    INT client_id "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
  }

  oybDb_oauth_refresh_tokens {
    VARCHAR id PK "NOT NULL"
    VARCHAR access_token_id "NOT NULL"
    TINYINT UNSIGNED revoked "NOT NULL"
    DATETIME expires_at
  }

  oybDb_permissions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR name "NOT NULL"
    VARCHAR display_name
    VARCHAR description
  }

  oybDb_Roles {
    VARCHAR Id PK "NOT NULL"
    VARCHAR name "NOT NULL"
    VARCHAR NormalizedName
    TEXT ConcurrencyStamp
    TEXT Discriminator "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR display_name
    VARCHAR description
  }

  oybDb_transaction_currencies {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    TINYINT UNSIGNED enabled "NOT NULL"
    VARCHAR code "NOT NULL"
    VARCHAR name "NOT NULL"
    VARCHAR symbol "NOT NULL"
    SMALLINT decimal_places "NOT NULL"
  }

  oybDb_transaction_types {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR type "NOT NULL"
  }

  oybDb_Users {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR UserName
    VARCHAR NormalizedUserName
    VARCHAR Email
    VARCHAR NormalizedEmail
    INT EmailConfirmed "NOT NULL"
    TEXT PasswordHash
    TEXT SecurityStamp
    TEXT ConcurrencyStamp
    TEXT PhoneNumber
    INT PhoneNumberConfirmed "NOT NULL"
    INT TwoFactorEnabled "NOT NULL"
    TIMESTAMP LockoutEnd
    INT LockoutEnabled "NOT NULL"
    INT AccessFailedCount "NOT NULL"
    TEXT Discriminator "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR remember_token
  }

  adventureworks_contactcreditcard {
    INT ContactID PK "NOT NULL"
    INT CreditCardID PK "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_productmodelillustration {
    INT ProductModelID PK "NOT NULL"
    INT IllustrationID PK "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productmodelproductdescriptionculture {
    INT ProductModelID PK "NOT NULL"
    INT ProductDescriptionID PK "NOT NULL"
    VARCHAR CultureID PK "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_vendorcontact {
    INT VendorID PK "NOT NULL"
    INT ContactID PK "NOT NULL"
    INT ContactTypeID "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  mockDb_accounts {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT account_type_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    DECIMAL virtual_balance
    VARCHAR iban
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    INT order "NOT NULL"
  }

  mockDb_attachments {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT attachable_id "NOT NULL"
    VARCHAR attachable_type "NOT NULL"
    VARCHAR md5 "NOT NULL"
    VARCHAR filename "NOT NULL"
    VARCHAR title
    TEXT description
    VARCHAR mime "NOT NULL"
    INT size "NOT NULL"
    TINYINT UNSIGNED uploaded "NOT NULL"
  }

  mockDb_available_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_currency_id FK "NOT NULL"
    DECIMAL amount "NOT NULL"
    DATE start_date "NOT NULL"
    DATE end_date "NOT NULL"
  }

  mockDb_bills {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_currency_id FK
    VARCHAR name "NOT NULL"
    VARCHAR match "NOT NULL"
    DECIMAL amount_min "NOT NULL"
    DECIMAL amount_max "NOT NULL"
    DATE date "NOT NULL"
    VARCHAR repeat_freq "NOT NULL"
    SMALLINT skip "NOT NULL"
    TINYINT UNSIGNED automatch "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED name_encrypted "NOT NULL"
    TINYINT UNSIGNED match_encrypted "NOT NULL"
    DATETIME end_date
    DATETIME extension_date
    INT order "NOT NULL"
  }

  mockDb_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    INT order "NOT NULL"
  }

  mockDb_categories {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
  }

  mockDb_currency_exchange_rates {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT from_currency_id FK "NOT NULL"
    INT to_currency_id FK "NOT NULL"
    DATE date "NOT NULL"
    DECIMAL rate "NOT NULL"
    DECIMAL user_rate
  }

  mockDb_export_jobs {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    VARCHAR key "NOT NULL"
    VARCHAR status "NOT NULL"
  }

  mockDb_object_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title "NOT NULL"
    INT order "NOT NULL"
  }

  mockDb_permission_role {
    INT permission_id PK "NOT NULL"
    VARCHAR role_id PK "NOT NULL"
  }

  mockDb_preferences {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TEXT data
  }

  mockDb_recurrences {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_type_id FK "NOT NULL"
    VARCHAR title "NOT NULL"
    TEXT description "NOT NULL"
    DATE first_date "NOT NULL"
    DATE repeat_until
    DATE latest_date
    SMALLINT repetitions "NOT NULL"
    TINYINT UNSIGNED apply_rules "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
  }

  mockDb_RoleClaims {
    INT Id PK "NOT NULL"
    VARCHAR RoleId FK "NOT NULL"
    TEXT ClaimType
    TEXT ClaimValue
  }

  mockDb_rule_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title "NOT NULL"
    TEXT description
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  mockDb_tags {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR tag "NOT NULL"
    VARCHAR tagMode "NOT NULL"
    DATE date
    TEXT description
    DECIMAL latitude
    DECIMAL longitude
    SMALLINT zoomLevel
  }

  mockDb_telemetry {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    DATETIME submitted "NOT NULL"
    VARCHAR installation_id "NOT NULL"
    VARCHAR type "NOT NULL"
    VARCHAR key "NOT NULL"
    TEXT value
  }

  mockDb_transaction_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title
  }

  mockDb_UserClaims {
    INT Id PK "NOT NULL"
    VARCHAR UserId FK "NOT NULL"
    TEXT ClaimType
    TEXT ClaimValue
  }

  mockDb_UserLogins {
    VARCHAR LoginProvider PK "NOT NULL"
    VARCHAR ProviderKey PK "NOT NULL"
    TEXT ProviderDisplayName
    VARCHAR UserId FK "NOT NULL"
  }

  mockDb_UserRoles {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR RoleId PK "NOT NULL"
  }

  mockDb_UserTokens {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR LoginProvider PK "NOT NULL"
    VARCHAR Name PK "NOT NULL"
    TEXT Value
  }

  oyb_test_accounts {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT account_type_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    DECIMAL virtual_balance
    VARCHAR iban
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    INT order "NOT NULL"
  }

  oyb_test_attachments {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT attachable_id "NOT NULL"
    VARCHAR attachable_type "NOT NULL"
    VARCHAR md5 "NOT NULL"
    VARCHAR filename "NOT NULL"
    VARCHAR title
    TEXT description
    VARCHAR mime "NOT NULL"
    INT size "NOT NULL"
    TINYINT UNSIGNED uploaded "NOT NULL"
  }

  oyb_test_available_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_currency_id FK "NOT NULL"
    DECIMAL amount "NOT NULL"
    DATE start_date "NOT NULL"
    DATE end_date "NOT NULL"
  }

  oyb_test_bills {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_currency_id FK
    VARCHAR name "NOT NULL"
    VARCHAR match "NOT NULL"
    DECIMAL amount_min "NOT NULL"
    DECIMAL amount_max "NOT NULL"
    DATE date "NOT NULL"
    VARCHAR repeat_freq "NOT NULL"
    SMALLINT skip "NOT NULL"
    TINYINT UNSIGNED automatch "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED name_encrypted "NOT NULL"
    TINYINT UNSIGNED match_encrypted "NOT NULL"
    DATETIME end_date
    DATETIME extension_date
    INT order "NOT NULL"
  }

  oyb_test_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    INT order "NOT NULL"
  }

  oyb_test_categories {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
  }

  oyb_test_currency_exchange_rates {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT from_currency_id FK "NOT NULL"
    INT to_currency_id FK "NOT NULL"
    DATE date "NOT NULL"
    DECIMAL rate "NOT NULL"
    DECIMAL user_rate
  }

  oyb_test_export_jobs {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    VARCHAR key "NOT NULL"
    VARCHAR status "NOT NULL"
  }

  oyb_test_object_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title "NOT NULL"
    INT order "NOT NULL"
  }

  oyb_test_permission_role {
    INT permission_id PK "NOT NULL"
    VARCHAR role_id PK "NOT NULL"
  }

  oyb_test_preferences {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TEXT data
  }

  oyb_test_recurrences {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_type_id FK "NOT NULL"
    VARCHAR title "NOT NULL"
    TEXT description "NOT NULL"
    DATE first_date "NOT NULL"
    DATE repeat_until
    DATE latest_date
    SMALLINT repetitions "NOT NULL"
    TINYINT UNSIGNED apply_rules "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
  }

  oyb_test_RoleClaims {
    INT Id PK "NOT NULL"
    VARCHAR RoleId FK "NOT NULL"
    TEXT ClaimType
    TEXT ClaimValue
  }

  oyb_test_rule_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title "NOT NULL"
    TEXT description
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  oyb_test_tags {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR tag "NOT NULL"
    VARCHAR tagMode "NOT NULL"
    DATE date
    TEXT description
    DECIMAL latitude
    DECIMAL longitude
    SMALLINT zoomLevel
  }

  oyb_test_telemetry {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    DATETIME submitted "NOT NULL"
    VARCHAR installation_id "NOT NULL"
    VARCHAR type "NOT NULL"
    VARCHAR key "NOT NULL"
    TEXT value
  }

  oyb_test_transaction_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title
  }

  oyb_test_UserClaims {
    INT Id PK "NOT NULL"
    VARCHAR UserId FK "NOT NULL"
    TEXT ClaimType
    TEXT ClaimValue
  }

  oyb_test_UserLogins {
    VARCHAR LoginProvider PK "NOT NULL"
    VARCHAR ProviderKey PK "NOT NULL"
    TEXT ProviderDisplayName
    VARCHAR UserId FK "NOT NULL"
  }

  oyb_test_UserRoles {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR RoleId PK "NOT NULL"
  }

  oyb_test_UserTokens {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR LoginProvider PK "NOT NULL"
    VARCHAR Name PK "NOT NULL"
    TEXT Value
  }

  oybDb_accounts {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT account_type_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    DECIMAL virtual_balance
    VARCHAR iban
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    INT order "NOT NULL"
  }

  oybDb_attachments {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT attachable_id "NOT NULL"
    VARCHAR attachable_type "NOT NULL"
    VARCHAR md5 "NOT NULL"
    VARCHAR filename "NOT NULL"
    VARCHAR title
    TEXT description
    VARCHAR mime "NOT NULL"
    INT size "NOT NULL"
    TINYINT UNSIGNED uploaded "NOT NULL"
  }

  oybDb_available_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_currency_id FK "NOT NULL"
    DECIMAL amount "NOT NULL"
    DATE start_date "NOT NULL"
    DATE end_date "NOT NULL"
  }

  oybDb_bills {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_currency_id FK
    VARCHAR name "NOT NULL"
    VARCHAR match "NOT NULL"
    DECIMAL amount_min "NOT NULL"
    DECIMAL amount_max "NOT NULL"
    DATE date "NOT NULL"
    VARCHAR repeat_freq "NOT NULL"
    SMALLINT skip "NOT NULL"
    TINYINT UNSIGNED automatch "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED name_encrypted "NOT NULL"
    TINYINT UNSIGNED match_encrypted "NOT NULL"
    DATETIME end_date
    DATETIME extension_date
    INT order "NOT NULL"
  }

  oybDb_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    INT order "NOT NULL"
  }

  oybDb_categories {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
  }

  oybDb_currency_exchange_rates {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT from_currency_id FK "NOT NULL"
    INT to_currency_id FK "NOT NULL"
    DATE date "NOT NULL"
    DECIMAL rate "NOT NULL"
    DECIMAL user_rate
  }

  oybDb_export_jobs {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    VARCHAR key "NOT NULL"
    VARCHAR status "NOT NULL"
  }

  oybDb_object_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title "NOT NULL"
    INT order "NOT NULL"
  }

  oybDb_permission_role {
    INT permission_id PK "NOT NULL"
    VARCHAR role_id PK "NOT NULL"
  }

  oybDb_preferences {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    VARCHAR name "NOT NULL"
    TEXT data
  }

  oybDb_recurrences {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_type_id FK "NOT NULL"
    VARCHAR title "NOT NULL"
    TEXT description "NOT NULL"
    DATE first_date "NOT NULL"
    DATE repeat_until
    DATE latest_date
    SMALLINT repetitions "NOT NULL"
    TINYINT UNSIGNED apply_rules "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
  }

  oybDb_RoleClaims {
    INT Id PK "NOT NULL"
    VARCHAR RoleId FK "NOT NULL"
    TEXT ClaimType
    TEXT ClaimValue
  }

  oybDb_rule_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title "NOT NULL"
    TEXT description
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  oybDb_tags {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR tag "NOT NULL"
    VARCHAR tagMode "NOT NULL"
    DATE date
    TEXT description
    DECIMAL latitude
    DECIMAL longitude
    SMALLINT zoomLevel
  }

  oybDb_telemetry {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    DATETIME submitted "NOT NULL"
    VARCHAR installation_id "NOT NULL"
    VARCHAR type "NOT NULL"
    VARCHAR key "NOT NULL"
    TEXT value
  }

  oybDb_transaction_groups {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    VARCHAR title
  }

  oybDb_UserClaims {
    INT Id PK "NOT NULL"
    VARCHAR UserId FK "NOT NULL"
    TEXT ClaimType
    TEXT ClaimValue
  }

  oybDb_UserLogins {
    VARCHAR LoginProvider PK "NOT NULL"
    VARCHAR ProviderKey PK "NOT NULL"
    TEXT ProviderDisplayName
    VARCHAR UserId FK "NOT NULL"
  }

  oybDb_UserRoles {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR RoleId PK "NOT NULL"
  }

  oybDb_UserTokens {
    VARCHAR UserId PK "NOT NULL"
    VARCHAR LoginProvider PK "NOT NULL"
    VARCHAR Name PK "NOT NULL"
    TEXT Value
  }

  adventureworks_customer {
    INT CustomerID PK "NOT NULL"
    INT TerritoryID FK
    VARCHAR AccountNumber "NOT NULL"
    VARCHAR CustomerType "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_employeedepartmenthistory {
    INT EmployeeID PK "NOT NULL"
    SMALLINT DepartmentID PK "NOT NULL"
    TINYINT ShiftID PK "NOT NULL"
    DATETIME StartDate PK "NOT NULL"
    DATETIME EndDate
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_employeepayhistory {
    INT EmployeeID PK "NOT NULL"
    DATETIME RateChangeDate PK "NOT NULL"
    DOUBLE Rate "NOT NULL"
    TINYINT PayFrequency "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_jobcandidate {
    INT JobCandidateID PK "NOT NULL"
    INT EmployeeID FK
    TEXT Resume
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_salesterritoryhistory {
    INT SalesPersonID PK "NOT NULL"
    INT TerritoryID PK "NOT NULL"
    DATETIME StartDate PK "NOT NULL"
    DATETIME EndDate
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  mockDb_account_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT account_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
  }

  mockDb_auto_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT budget_id FK "NOT NULL"
    INT transaction_currency_id FK
    DECIMAL amount "NOT NULL"
    VARCHAR period "NOT NULL"
    TINYINT UNSIGNED auto_budget_type "NOT NULL"
  }

  mockDb_budget_limits {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT budget_id FK "NOT NULL"
    INT transaction_currency_id FK
    DATE start_date "NOT NULL"
    DATE end_date
    DECIMAL amount "NOT NULL"
  }

  mockDb_import_jobs {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    INT tag_id FK
    VARCHAR key "NOT NULL"
    VARCHAR file_type "NOT NULL"
    VARCHAR provider "NOT NULL"
    VARCHAR status "NOT NULL"
    VARCHAR stage "NOT NULL"
    LONGTEXT configuration
    TEXT extended_status
    LONGTEXT transactions
    LONGTEXT errors
  }

  mockDb_object_groupables {
    INT object_groupable_id PK "NOT NULL"
    INT object_group_id FK "NOT NULL"
    VARCHAR object_groupable_type "NOT NULL"
  }

  mockDb_recurrences_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT value "NOT NULL"
  }

  mockDb_recurrences_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    VARCHAR repetition_type "NOT NULL"
    VARCHAR repetition_moment "NOT NULL"
    SMALLINT repetition_skip "NOT NULL"
    SMALLINT weekend "NOT NULL"
  }

  mockDb_recurrences_transactions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    INT transaction_currency_id FK "NOT NULL"
    INT foreign_currency_id FK
    INT source_id FK "NOT NULL"
    INT destination_id FK "NOT NULL"
    DECIMAL amount "NOT NULL"
    DECIMAL foreign_amount
    VARCHAR description "NOT NULL"
  }

  mockDb_rules {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT rule_group_id FK "NOT NULL"
    VARCHAR title "NOT NULL"
    TEXT description
    INT UNSIGNED order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
    TINYINT UNSIGNED strict "NOT NULL"
  }

  mockDb_saving_goals {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT account_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    DECIMAL targetamount "NOT NULL"
    DATE startdate
    DATE targetdate
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
  }

  mockDb_transaction_journals {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_type_id FK "NOT NULL"
    INT transaction_group_id FK
    INT bill_id FK
    INT transaction_currency_id FK
    VARCHAR description "NOT NULL"
    DATETIME date "NOT NULL"
    DATE interest_date
    DATE book_date
    DATE process_date
    INT order "NOT NULL"
    INT tag_count "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    TINYINT UNSIGNED completed "NOT NULL"
  }

  oyb_test_account_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT account_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
  }

  oyb_test_auto_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT budget_id FK "NOT NULL"
    INT transaction_currency_id FK
    DECIMAL amount "NOT NULL"
    VARCHAR period "NOT NULL"
    TINYINT UNSIGNED auto_budget_type "NOT NULL"
  }

  oyb_test_budget_limits {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT budget_id FK "NOT NULL"
    INT transaction_currency_id FK
    DATE start_date "NOT NULL"
    DATE end_date
    DECIMAL amount "NOT NULL"
  }

  oyb_test_import_jobs {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    INT tag_id FK
    VARCHAR key "NOT NULL"
    VARCHAR file_type "NOT NULL"
    VARCHAR provider "NOT NULL"
    VARCHAR status "NOT NULL"
    VARCHAR stage "NOT NULL"
    TEXT configuration
    TEXT extended_status
    LONGTEXT transactions
    LONGTEXT errors
  }

  oyb_test_object_groupables {
    INT object_groupable_id PK "NOT NULL"
    INT object_group_id FK "NOT NULL"
    VARCHAR object_groupable_type "NOT NULL"
  }

  oyb_test_recurrences_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT value "NOT NULL"
  }

  oyb_test_recurrences_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    VARCHAR repetition_type "NOT NULL"
    VARCHAR repetition_moment "NOT NULL"
    SMALLINT repetition_skip "NOT NULL"
    SMALLINT weekend "NOT NULL"
  }

  oyb_test_recurrences_transactions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    INT transaction_currency_id FK "NOT NULL"
    INT foreign_currency_id FK
    INT source_id FK "NOT NULL"
    INT destination_id FK "NOT NULL"
    DECIMAL amount "NOT NULL"
    DECIMAL foreign_amount
    VARCHAR description "NOT NULL"
  }

  oyb_test_rules {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT rule_group_id FK "NOT NULL"
    VARCHAR title "NOT NULL"
    TEXT description
    INT UNSIGNED order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
    TINYINT UNSIGNED strict "NOT NULL"
  }

  oyb_test_saving_goals {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT account_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    DECIMAL targetamount "NOT NULL"
    DATE startdate
    DATE targetdate
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
  }

  oyb_test_transaction_journals {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_type_id FK "NOT NULL"
    INT transaction_group_id FK
    INT bill_id FK
    INT transaction_currency_id FK
    VARCHAR description "NOT NULL"
    DATETIME date "NOT NULL"
    DATE interest_date
    DATE book_date
    DATE process_date
    INT order "NOT NULL"
    INT tag_count "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    TINYINT UNSIGNED completed "NOT NULL"
  }

  oybDb_account_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT account_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
  }

  oybDb_auto_budgets {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT budget_id FK "NOT NULL"
    INT transaction_currency_id FK
    DECIMAL amount "NOT NULL"
    VARCHAR period "NOT NULL"
    TINYINT auto_budget_type "NOT NULL"
  }

  oybDb_budget_limits {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT budget_id FK "NOT NULL"
    INT transaction_currency_id FK
    DATE start_date "NOT NULL"
    DATE end_date
    DECIMAL amount "NOT NULL"
  }

  oybDb_import_jobs {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    VARCHAR user_id FK
    INT tag_id FK
    VARCHAR key "NOT NULL"
    VARCHAR file_type "NOT NULL"
    VARCHAR provider "NOT NULL"
    VARCHAR status "NOT NULL"
    VARCHAR stage "NOT NULL"
    TEXT configuration
    TEXT extended_status
    LONGTEXT transactions
    LONGTEXT errors
  }

  oybDb_object_groupables {
    INT object_groupable_id PK "NOT NULL"
    INT object_group_id FK "NOT NULL"
    VARCHAR object_groupable_type "NOT NULL"
  }

  oybDb_recurrences_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT value "NOT NULL"
  }

  oybDb_recurrences_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    VARCHAR repetition_type "NOT NULL"
    VARCHAR repetition_moment "NOT NULL"
    SMALLINT repetition_skip "NOT NULL"
    SMALLINT weekend "NOT NULL"
  }

  oybDb_recurrences_transactions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT recurrence_id FK "NOT NULL"
    INT transaction_currency_id FK "NOT NULL"
    INT foreign_currency_id FK
    INT source_id FK "NOT NULL"
    INT destination_id FK "NOT NULL"
    DECIMAL amount "NOT NULL"
    DECIMAL foreign_amount
    VARCHAR description "NOT NULL"
  }

  oybDb_rules {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT rule_group_id FK "NOT NULL"
    VARCHAR title "NOT NULL"
    TEXT description
    INT UNSIGNED order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
    TINYINT UNSIGNED strict "NOT NULL"
  }

  oybDb_saving_goals {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT account_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    DECIMAL targetamount "NOT NULL"
    DATE startdate
    DATE targetdate
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
  }

  oybDb_transaction_journals {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    VARCHAR user_id FK
    INT transaction_type_id FK "NOT NULL"
    INT transaction_group_id FK
    INT bill_id FK
    INT transaction_currency_id FK
    VARCHAR description "NOT NULL"
    DATETIME date "NOT NULL"
    DATE interest_date
    DATE book_date
    DATE process_date
    INT order "NOT NULL"
    INT tag_count "NOT NULL"
    TINYINT UNSIGNED encrypted "NOT NULL"
    TINYINT UNSIGNED completed "NOT NULL"
  }

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

  adventureworks_individual {
    INT CustomerID PK "NOT NULL"
    INT ContactID FK "NOT NULL"
    TEXT Demographics
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productcosthistory {
    INT ProductID PK "NOT NULL"
    DATETIME StartDate PK "NOT NULL"
    DATETIME EndDate
    DOUBLE StandardCost "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productdocument {
    INT ProductID PK "NOT NULL"
    INT DocumentID PK "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productinventory {
    INT ProductID PK "NOT NULL"
    SMALLINT LocationID PK "NOT NULL"
    VARCHAR Shelf "NOT NULL"
    TINYINT Bin "NOT NULL"
    SMALLINT Quantity "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productlistpricehistory {
    INT ProductID PK "NOT NULL"
    DATETIME StartDate PK "NOT NULL"
    DATETIME EndDate
    DOUBLE ListPrice "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_productproductphoto {
    INT ProductID PK "NOT NULL"
    INT ProductPhotoID PK "NOT NULL"
    BIT Primary "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_salespersonquotahistory {
    INT SalesPersonID PK "NOT NULL"
    DATETIME QuotaDate PK "NOT NULL"
    DOUBLE SalesQuota "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_shoppingcartitem {
    INT ShoppingCartItemID PK "NOT NULL"
    VARCHAR ShoppingCartID "NOT NULL"
    INT Quantity "NOT NULL"
    INT ProductID FK "NOT NULL"
    TIMESTAMP DateCreated "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_specialofferproduct {
    INT SpecialOfferID PK "NOT NULL"
    INT ProductID PK "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_store {
    INT CustomerID PK "NOT NULL"
    VARCHAR Name "NOT NULL"
    INT SalesPersonID FK
    TEXT Demographics
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_storecontact {
    INT CustomerID PK "NOT NULL"
    INT ContactID PK "NOT NULL"
    INT ContactTypeID FK "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  mockDb_budget_transaction_journal {
    INT id PK "NOT NULL"
    INT budget_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  mockDb_category_transaction_journal {
    INT id PK "NOT NULL"
    INT category_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  mockDb_group_journals {
    INT id PK "NOT NULL"
    INT transaction_group_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  mockDb_journal_links {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT link_type_id FK "NOT NULL"
    INT source_id FK "NOT NULL"
    INT destination_id FK "NOT NULL"
    TEXT comment
  }

  mockDb_journal_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT transaction_journal_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
    VARCHAR hash "NOT NULL"
    DATETIME deleted_at
  }

  mockDb_limit_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT budget_limit_id FK "NOT NULL"
    DATE startdate "NOT NULL"
    DATE enddate "NOT NULL"
    DECIMAL amount "NOT NULL"
  }

  mockDb_rt_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT rt_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT value "NOT NULL"
  }

  mockDb_rule_actions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT rule_id FK "NOT NULL"
    VARCHAR action_type "NOT NULL"
    VARCHAR action_value "NOT NULL"
    INT UNSIGNED order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  mockDb_rule_triggers {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT rule_id FK "NOT NULL"
    VARCHAR trigger_type "NOT NULL"
    VARCHAR trigger_value "NOT NULL"
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  mockDb_saving_goal_events {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT saving_goal_id FK "NOT NULL"
    INT transaction_journal_id FK
    DATE date "NOT NULL"
    DECIMAL amount "NOT NULL"
    INT account_id FK "NOT NULL"
  }

  mockDb_saving_goal_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT saving_goal_id FK "NOT NULL"
    DATE startdate
    DATE targetdate
    DECIMAL currentamount "NOT NULL"
  }

  mockDb_tag_transaction_journal {
    INT id PK "NOT NULL"
    INT tag_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  mockDb_transactions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    TINYINT UNSIGNED reconciled "NOT NULL"
    INT account_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
    VARCHAR description
    INT transaction_currency_id FK
    DECIMAL amount "NOT NULL"
    DECIMAL foreign_amount
    INT foreign_currency_id FK
    SMALLINT identifier "NOT NULL"
    TINYINT UNSIGNED historical
  }

  oyb_test_budget_transaction_journal {
    INT id PK "NOT NULL"
    INT budget_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  oyb_test_category_transaction_journal {
    INT id PK "NOT NULL"
    INT category_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  oyb_test_group_journals {
    INT id PK "NOT NULL"
    INT transaction_group_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  oyb_test_journal_links {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT link_type_id FK "NOT NULL"
    INT source_id FK "NOT NULL"
    INT destination_id FK "NOT NULL"
    TEXT comment
  }

  oyb_test_journal_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT transaction_journal_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
    VARCHAR hash "NOT NULL"
    DATETIME deleted_at
  }

  oyb_test_limit_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT budget_limit_id FK "NOT NULL"
    DATE startdate "NOT NULL"
    DATE enddate "NOT NULL"
    DECIMAL amount "NOT NULL"
  }

  oyb_test_rt_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT rt_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT value "NOT NULL"
  }

  oyb_test_rule_actions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT rule_id FK "NOT NULL"
    VARCHAR action_type "NOT NULL"
    VARCHAR action_value "NOT NULL"
    INT UNSIGNED order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  oyb_test_rule_triggers {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT rule_id FK "NOT NULL"
    VARCHAR trigger_type "NOT NULL"
    VARCHAR trigger_value "NOT NULL"
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  oyb_test_saving_goal_events {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT saving_goal_id FK "NOT NULL"
    INT transaction_journal_id FK
    DATE date "NOT NULL"
    DECIMAL amount "NOT NULL"
    INT account_id FK "NOT NULL"
  }

  oyb_test_saving_goal_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT saving_goal_id FK "NOT NULL"
    DATE startdate
    DATE targetdate
    DECIMAL currentamount "NOT NULL"
  }

  oyb_test_tag_transaction_journal {
    INT id PK "NOT NULL"
    INT tag_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  oyb_test_transactions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    TINYINT UNSIGNED reconciled "NOT NULL"
    INT account_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
    VARCHAR description
    INT transaction_currency_id FK
    DECIMAL amount "NOT NULL"
    DECIMAL foreign_amount
    INT foreign_currency_id FK
    SMALLINT identifier "NOT NULL"
    TINYINT UNSIGNED historical
  }

  oybDb_budget_transaction_journal {
    INT id PK "NOT NULL"
    INT budget_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  oybDb_category_transaction_journal {
    INT id PK "NOT NULL"
    INT category_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  oybDb_group_journals {
    INT id PK "NOT NULL"
    INT transaction_group_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  oybDb_journal_links {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT link_type_id FK "NOT NULL"
    INT source_id FK "NOT NULL"
    INT destination_id FK "NOT NULL"
    TEXT comment
  }

  oybDb_journal_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT transaction_journal_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT data "NOT NULL"
    VARCHAR hash "NOT NULL"
    DATETIME deleted_at
  }

  oybDb_limit_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT budget_limit_id FK "NOT NULL"
    DATE startdate "NOT NULL"
    DATE enddate "NOT NULL"
    DECIMAL amount "NOT NULL"
  }

  oybDb_rt_meta {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    INT rt_id FK "NOT NULL"
    VARCHAR name "NOT NULL"
    TEXT value "NOT NULL"
  }

  oybDb_rule_actions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT rule_id FK "NOT NULL"
    VARCHAR action_type "NOT NULL"
    VARCHAR action_value "NOT NULL"
    INT UNSIGNED order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  oybDb_rule_triggers {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT rule_id FK "NOT NULL"
    VARCHAR trigger_type "NOT NULL"
    VARCHAR trigger_value "NOT NULL"
    INT order "NOT NULL"
    TINYINT UNSIGNED active "NOT NULL"
    TINYINT UNSIGNED stop_processing "NOT NULL"
  }

  oybDb_saving_goal_events {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT saving_goal_id FK "NOT NULL"
    INT transaction_journal_id FK
    DATE date "NOT NULL"
    DECIMAL amount "NOT NULL"
    INT account_id FK "NOT NULL"
  }

  oybDb_saving_goal_repetitions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    INT saving_goal_id FK "NOT NULL"
    DATE startdate
    DATE targetdate
    DECIMAL currentamount "NOT NULL"
  }

  oybDb_tag_transaction_journal {
    INT id PK "NOT NULL"
    INT tag_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
  }

  oybDb_transactions {
    INT id PK "NOT NULL"
    DATETIME created_at
    DATETIME updated_at
    DATETIME deleted_at
    TINYINT UNSIGNED reconciled "NOT NULL"
    INT account_id FK "NOT NULL"
    INT transaction_journal_id FK "NOT NULL"
    VARCHAR description
    INT transaction_currency_id FK
    DECIMAL amount "NOT NULL"
    DECIMAL foreign_amount
    INT foreign_currency_id FK
    SMALLINT identifier "NOT NULL"
    TINYINT historical
  }

  adventureworks_customeraddress {
    INT CustomerID PK "NOT NULL"
    INT AddressID PK "NOT NULL"
    INT AddressTypeID FK "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

  adventureworks_employeeaddress {
    INT EmployeeID PK "NOT NULL"
    INT AddressID PK "NOT NULL"
    VARBINARY rowguid "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  adventureworks_vendoraddress {
    INT VendorID PK "NOT NULL"
    INT AddressID PK "NOT NULL"
    INT AddressTypeID FK "NOT NULL"
    TIMESTAMP ModifiedDate "NOT NULL"
  }

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

  mockDb_budget_transaction {
    INT id PK "NOT NULL"
    INT budget_id FK "NOT NULL"
    INT transaction_id FK "NOT NULL"
  }

  mockDb_category_transaction {
    INT id PK "NOT NULL"
    INT category_id FK "NOT NULL"
    INT transaction_id FK "NOT NULL"
  }

  oyb_test_budget_transaction {
    INT id PK "NOT NULL"
    INT budget_id FK "NOT NULL"
    INT transaction_id FK "NOT NULL"
  }

  oyb_test_category_transaction {
    INT id PK "NOT NULL"
    INT category_id FK "NOT NULL"
    INT transaction_id FK "NOT NULL"
  }

  oybDb_budget_transaction {
    INT id PK "NOT NULL"
    INT budget_id FK "NOT NULL"
    INT transaction_id FK "NOT NULL"
  }

  oybDb_category_transaction {
    INT id PK "NOT NULL"
    INT category_id FK "NOT NULL"
    INT transaction_id FK "NOT NULL"
  }

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

  mockDb_account_types ||--o{ mockDb_accounts : "[mockDb_account_types.id] to [mockDb_accounts.account_type_id]"
  mockDb_Users ||--o{ mockDb_accounts : "[mockDb_Users.UserId] to [mockDb_accounts.user_id]"

  mockDb_Users ||--o{ mockDb_attachments : "[mockDb_Users.UserId] to [mockDb_attachments.user_id]"

  mockDb_transaction_currencies ||--o{ mockDb_available_budgets : "[mockDb_transaction_currencies.id] to [mockDb_available_budgets.transaction_currency_id]"
  mockDb_Users ||--o{ mockDb_available_budgets : "[mockDb_Users.UserId] to [mockDb_available_budgets.user_id]"

  mockDb_transaction_currencies ||--o{ mockDb_bills : "[mockDb_transaction_currencies.id] to [mockDb_bills.transaction_currency_id]"
  mockDb_Users ||--o{ mockDb_bills : "[mockDb_Users.UserId] to [mockDb_bills.user_id]"

  mockDb_Users ||--o{ mockDb_budgets : "[mockDb_Users.UserId] to [mockDb_budgets.user_id]"

  mockDb_Users ||--o{ mockDb_categories : "[mockDb_Users.UserId] to [mockDb_categories.user_id]"

  mockDb_transaction_currencies ||--o{ mockDb_currency_exchange_rates : "[mockDb_transaction_currencies.id] to [mockDb_currency_exchange_rates.from_currency_id]"
  mockDb_transaction_currencies ||--o{ mockDb_currency_exchange_rates : "[mockDb_transaction_currencies.id] to [mockDb_currency_exchange_rates.to_currency_id]"
  mockDb_Users ||--o{ mockDb_currency_exchange_rates : "[mockDb_Users.UserId] to [mockDb_currency_exchange_rates.user_id]"

  mockDb_Users ||--o{ mockDb_export_jobs : "[mockDb_Users.UserId] to [mockDb_export_jobs.user_id]"

  mockDb_Users ||--o{ mockDb_object_groups : "[mockDb_Users.UserId] to [mockDb_object_groups.user_id]"

  mockDb_permissions ||--o{ mockDb_permission_role : "[mockDb_permissions.id] to [mockDb_permission_role.permission_id]"
  mockDb_Roles ||--o{ mockDb_permission_role : "[mockDb_Roles.Id] to [mockDb_permission_role.role_id]"

  mockDb_Users ||--o{ mockDb_preferences : "[mockDb_Users.UserId] to [mockDb_preferences.user_id]"

  mockDb_transaction_types ||--o{ mockDb_recurrences : "[mockDb_transaction_types.id] to [mockDb_recurrences.transaction_type_id]"
  mockDb_Users ||--o{ mockDb_recurrences : "[mockDb_Users.UserId] to [mockDb_recurrences.user_id]"

  mockDb_Roles ||--o{ mockDb_RoleClaims : "[mockDb_Roles.Id] to [mockDb_RoleClaims.RoleId]"

  mockDb_Users ||--o{ mockDb_rule_groups : "[mockDb_Users.UserId] to [mockDb_rule_groups.user_id]"

  mockDb_Users ||--o{ mockDb_tags : "[mockDb_Users.UserId] to [mockDb_tags.user_id]"

  mockDb_Users ||--o{ mockDb_telemetry : "[mockDb_Users.UserId] to [mockDb_telemetry.user_id]"

  mockDb_Users ||--o{ mockDb_transaction_groups : "[mockDb_Users.UserId] to [mockDb_transaction_groups.user_id]"

  mockDb_Users ||--o{ mockDb_UserClaims : "[mockDb_Users.UserId] to [mockDb_UserClaims.UserId]"

  mockDb_Users ||--o{ mockDb_UserLogins : "[mockDb_Users.UserId] to [mockDb_UserLogins.UserId]"

  mockDb_Roles ||--o{ mockDb_UserRoles : "[mockDb_Roles.Id] to [mockDb_UserRoles.RoleId]"
  mockDb_Users ||--o{ mockDb_UserRoles : "[mockDb_Users.UserId] to [mockDb_UserRoles.UserId]"

  mockDb_Users ||--o{ mockDb_UserTokens : "[mockDb_Users.UserId] to [mockDb_UserTokens.UserId]"

  oyb_test_account_types ||--o{ oyb_test_accounts : "[oyb_test_account_types.id] to [oyb_test_accounts.account_type_id]"
  oyb_test_Users ||--o{ oyb_test_accounts : "[oyb_test_Users.UserId] to [oyb_test_accounts.user_id]"

  oyb_test_Users ||--o{ oyb_test_attachments : "[oyb_test_Users.UserId] to [oyb_test_attachments.user_id]"

  oyb_test_transaction_currencies ||--o{ oyb_test_available_budgets : "[oyb_test_transaction_currencies.id] to [oyb_test_available_budgets.transaction_currency_id]"
  oyb_test_Users ||--o{ oyb_test_available_budgets : "[oyb_test_Users.UserId] to [oyb_test_available_budgets.user_id]"

  oyb_test_transaction_currencies ||--o{ oyb_test_bills : "[oyb_test_transaction_currencies.id] to [oyb_test_bills.transaction_currency_id]"
  oyb_test_Users ||--o{ oyb_test_bills : "[oyb_test_Users.UserId] to [oyb_test_bills.user_id]"

  oyb_test_Users ||--o{ oyb_test_budgets : "[oyb_test_Users.UserId] to [oyb_test_budgets.user_id]"

  oyb_test_Users ||--o{ oyb_test_categories : "[oyb_test_Users.UserId] to [oyb_test_categories.user_id]"

  oyb_test_transaction_currencies ||--o{ oyb_test_currency_exchange_rates : "[oyb_test_transaction_currencies.id] to [oyb_test_currency_exchange_rates.from_currency_id]"
  oyb_test_transaction_currencies ||--o{ oyb_test_currency_exchange_rates : "[oyb_test_transaction_currencies.id] to [oyb_test_currency_exchange_rates.to_currency_id]"
  oyb_test_Users ||--o{ oyb_test_currency_exchange_rates : "[oyb_test_Users.UserId] to [oyb_test_currency_exchange_rates.user_id]"

  oyb_test_Users ||--o{ oyb_test_export_jobs : "[oyb_test_Users.UserId] to [oyb_test_export_jobs.user_id]"

  oyb_test_Users ||--o{ oyb_test_object_groups : "[oyb_test_Users.UserId] to [oyb_test_object_groups.user_id]"

  oyb_test_permissions ||--o{ oyb_test_permission_role : "[oyb_test_permissions.id] to [oyb_test_permission_role.permission_id]"
  oyb_test_Roles ||--o{ oyb_test_permission_role : "[oyb_test_Roles.Id] to [oyb_test_permission_role.role_id]"

  oyb_test_Users ||--o{ oyb_test_preferences : "[oyb_test_Users.UserId] to [oyb_test_preferences.user_id]"

  oyb_test_transaction_types ||--o{ oyb_test_recurrences : "[oyb_test_transaction_types.id] to [oyb_test_recurrences.transaction_type_id]"
  oyb_test_Users ||--o{ oyb_test_recurrences : "[oyb_test_Users.UserId] to [oyb_test_recurrences.user_id]"

  oyb_test_Roles ||--o{ oyb_test_RoleClaims : "[oyb_test_Roles.Id] to [oyb_test_RoleClaims.RoleId]"

  oyb_test_Users ||--o{ oyb_test_rule_groups : "[oyb_test_Users.UserId] to [oyb_test_rule_groups.user_id]"

  oyb_test_Users ||--o{ oyb_test_tags : "[oyb_test_Users.UserId] to [oyb_test_tags.user_id]"

  oyb_test_Users ||--o{ oyb_test_telemetry : "[oyb_test_Users.UserId] to [oyb_test_telemetry.user_id]"

  oyb_test_Users ||--o{ oyb_test_transaction_groups : "[oyb_test_Users.UserId] to [oyb_test_transaction_groups.user_id]"

  oyb_test_Users ||--o{ oyb_test_UserClaims : "[oyb_test_Users.UserId] to [oyb_test_UserClaims.UserId]"

  oyb_test_Users ||--o{ oyb_test_UserLogins : "[oyb_test_Users.UserId] to [oyb_test_UserLogins.UserId]"

  oyb_test_Roles ||--o{ oyb_test_UserRoles : "[oyb_test_Roles.Id] to [oyb_test_UserRoles.RoleId]"
  oyb_test_Users ||--o{ oyb_test_UserRoles : "[oyb_test_Users.UserId] to [oyb_test_UserRoles.UserId]"

  oyb_test_Users ||--o{ oyb_test_UserTokens : "[oyb_test_Users.UserId] to [oyb_test_UserTokens.UserId]"

  oybDb_account_types ||--o{ oybDb_accounts : "[oybDb_account_types.id] to [oybDb_accounts.account_type_id]"
  oybDb_Users ||--o{ oybDb_accounts : "[oybDb_Users.UserId] to [oybDb_accounts.user_id]"

  oybDb_Users ||--o{ oybDb_attachments : "[oybDb_Users.UserId] to [oybDb_attachments.user_id]"

  oybDb_transaction_currencies ||--o{ oybDb_available_budgets : "[oybDb_transaction_currencies.id] to [oybDb_available_budgets.transaction_currency_id]"
  oybDb_Users ||--o{ oybDb_available_budgets : "[oybDb_Users.UserId] to [oybDb_available_budgets.user_id]"

  oybDb_transaction_currencies ||--o{ oybDb_bills : "[oybDb_transaction_currencies.id] to [oybDb_bills.transaction_currency_id]"
  oybDb_Users ||--o{ oybDb_bills : "[oybDb_Users.UserId] to [oybDb_bills.user_id]"

  oybDb_Users ||--o{ oybDb_budgets : "[oybDb_Users.UserId] to [oybDb_budgets.user_id]"

  oybDb_Users ||--o{ oybDb_categories : "[oybDb_Users.UserId] to [oybDb_categories.user_id]"

  oybDb_transaction_currencies ||--o{ oybDb_currency_exchange_rates : "[oybDb_transaction_currencies.id] to [oybDb_currency_exchange_rates.from_currency_id]"
  oybDb_transaction_currencies ||--o{ oybDb_currency_exchange_rates : "[oybDb_transaction_currencies.id] to [oybDb_currency_exchange_rates.to_currency_id]"
  oybDb_Users ||--o{ oybDb_currency_exchange_rates : "[oybDb_Users.UserId] to [oybDb_currency_exchange_rates.user_id]"

  oybDb_Users ||--o{ oybDb_export_jobs : "[oybDb_Users.UserId] to [oybDb_export_jobs.user_id]"

  oybDb_Users ||--o{ oybDb_object_groups : "[oybDb_Users.UserId] to [oybDb_object_groups.user_id]"

  oybDb_permissions ||--o{ oybDb_permission_role : "[oybDb_permissions.id] to [oybDb_permission_role.permission_id]"
  oybDb_Roles ||--o{ oybDb_permission_role : "[oybDb_Roles.Id] to [oybDb_permission_role.role_id]"

  oybDb_Users ||--o{ oybDb_preferences : "[oybDb_Users.UserId] to [oybDb_preferences.user_id]"

  oybDb_transaction_types ||--o{ oybDb_recurrences : "[oybDb_transaction_types.id] to [oybDb_recurrences.transaction_type_id]"
  oybDb_Users ||--o{ oybDb_recurrences : "[oybDb_Users.UserId] to [oybDb_recurrences.user_id]"

  oybDb_Roles ||--o{ oybDb_RoleClaims : "[oybDb_Roles.Id] to [oybDb_RoleClaims.RoleId]"

  oybDb_Users ||--o{ oybDb_rule_groups : "[oybDb_Users.UserId] to [oybDb_rule_groups.user_id]"

  oybDb_Users ||--o{ oybDb_tags : "[oybDb_Users.UserId] to [oybDb_tags.user_id]"

  oybDb_Users ||--o{ oybDb_telemetry : "[oybDb_Users.UserId] to [oybDb_telemetry.user_id]"

  oybDb_Users ||--o{ oybDb_transaction_groups : "[oybDb_Users.UserId] to [oybDb_transaction_groups.user_id]"

  oybDb_Users ||--o{ oybDb_UserClaims : "[oybDb_Users.UserId] to [oybDb_UserClaims.UserId]"

  oybDb_Users ||--o{ oybDb_UserLogins : "[oybDb_Users.UserId] to [oybDb_UserLogins.UserId]"

  oybDb_Roles ||--o{ oybDb_UserRoles : "[oybDb_Roles.Id] to [oybDb_UserRoles.RoleId]"
  oybDb_Users ||--o{ oybDb_UserRoles : "[oybDb_Users.UserId] to [oybDb_UserRoles.UserId]"

  oybDb_Users ||--o{ oybDb_UserTokens : "[oybDb_Users.UserId] to [oybDb_UserTokens.UserId]"

  adventureworks_salesterritory ||--o{ adventureworks_customer : "[adventureworks_salesterritory.TerritoryID] to [adventureworks_customer.TerritoryID]"

  adventureworks_department ||--o{ adventureworks_employeedepartmenthistory : "[adventureworks_department.DepartmentID] to [adventureworks_employeedepartmenthistory.DepartmentID]"
  adventureworks_employee ||--o{ adventureworks_employeedepartmenthistory : "[adventureworks_employee.EmployeeID] to [adventureworks_employeedepartmenthistory.EmployeeID]"
  adventureworks_shift ||--o{ adventureworks_employeedepartmenthistory : "[adventureworks_shift.ShiftID] to [adventureworks_employeedepartmenthistory.ShiftID]"

  adventureworks_employee ||--o{ adventureworks_employeepayhistory : "[adventureworks_employee.EmployeeID] to [adventureworks_employeepayhistory.EmployeeID]"

  adventureworks_employee ||--o{ adventureworks_jobcandidate : "[adventureworks_employee.EmployeeID] to [adventureworks_jobcandidate.EmployeeID]"

  adventureworks_productmodel ||--o{ adventureworks_product : "[adventureworks_productmodel.ProductModelID] to [adventureworks_product.ProductModelID]"
```