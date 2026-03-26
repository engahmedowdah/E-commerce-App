import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "E-commerce API",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:5000/api/v1",
                description: "Development Server",
            },
        ],
        components: {
            schemas: {
                Admin: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        UserID: { type: "string" },
                        RoleID: { type: "string" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                        CreatedDate: { type: "string", format: "date-time" },
                        UpdatedDate: { type: "string", format: "date-time" },
                    },
                },
                CurrencySymbol: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        CountryID: { type: "string" },
                        CurrencySymbol: { type: "string" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                        CreatedDate: { type: "string", format: "date-time" },
                        UpdatedDate: { type: "string", format: "date-time" },
                    },
                },
                User: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        PersonID: {
                            type: "object",
                            properties: {
                                FirstName: { type: "string" },
                                LastName: { type: "string" },
                                Email: { type: "string" },
                            },
                        },
                        IsActivated: { type: "boolean" },
                        LogoID: { type: "string" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                Category: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Description: { type: "string" },
                        Slug: { type: "string" },
                        IsActivated: { type: "boolean" },
                    },
                },
                Subcategory: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Description: { type: "string" },
                        CategoryID: { $ref: "#/components/schemas/Category" },
                        Slug: { type: "string" },
                        IsActivated: { type: "boolean" },
                    },
                },
                Collection: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Slug: { type: "string" },
                        Description: { type: "string" },
                        IsActivated: { type: "boolean" },
                    },
                },
                Address: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        UserID: { type: "string" },
                        CityID: { type: "string" },
                        CountryID: { type: "string" },
                        AddressLine1: { type: "string" },
                        AddressLine2: { type: "string" },
                        PostalCode: { type: "string" },
                        IsDefault: { type: "boolean" },
                    },
                },
                Order: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        UserID: { type: "string" },
                        Items: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    ProductID: { type: "string" },
                                    Quantity: { type: "number" },
                                },
                            },
                        },
                        AddressID: { type: "string" },
                        PaymentID: { type: "string" },
                        OrderStatusID: { type: "string" },
                    },
                },
                Product: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Description: { type: "string" },
                        Price: { type: "number" },
                        Stock: { type: "number" },
                        CategoryID: { type: "string" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                City: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        CountryID: { type: "number" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                Country: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Currency: { type: "string" },
                        Slug: { type: "string" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                Role: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Description: { type: "string" },
                        Permissions: {
                            type: "array",
                            items: { type: "string" },
                        },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                Permission: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Description: { type: "string" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                Review: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        UserID: { type: "string" },
                        ProductID: { type: "string" },
                        Rating: { type: "number" },
                        Comment: { type: "string" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                Image: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        path: { type: "string" },
                        filename: { type: "string" },
                    },
                },
                OrderStatus: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Description: { type: "string" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                PaymentStatus: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Description: { type: "string" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                PaymentMethod: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        Name: { type: "string" },
                        Description: { type: "string" },
                        IsActivated: { type: "boolean" },
                        IsDeleted: { type: "boolean" },
                    },
                },
                Error: {
                    type: "object",
                    properties: {
                        success: { type: "boolean", example: false },
                        message: { type: "string" },
                    },
                },
            },
        },
    },
    apis: ["./modules/presentation/routes/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;