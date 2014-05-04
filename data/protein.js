// JSON File
var protein = [

	// ############################################
	// ################## Beef ####################
	// ############################################
	{
	    "protein_id": "000001",
	    "protein_common_name": "Beef",
	    "protein_species_name": "Bos primigenius",
	    "protein_type_group": "Animal, Ruminant",
        "icon": "chicken.png",

	    "protein_nutrient_details":
			[
				{ "protein_nutrient_score": "000005" },
				{ "protein_content_per_volume": "14.97", "protein_content_per_volume_unit": "g/100g", "protein_content_per_volume_source": "USDA" }
			],

	    "protein_environment_details":
			[
				{ "protein_environmental_score": "000008" },
				{ "protein_water_footprint_per_unit_of_nutritional_value": "11", "protein_water_footprint_per_unit_of_nutritional_value_unit": "quarts/kcal", "protein_water_footprint_per_unit_of_nutritional_value_source": "Mekonnen, et al., 2012", },
				{ "protein_CO2_emission": "27", "protein_CO2_emission_unit": "kg C02 / kg protein", "protein_CO2_emission_source": "EWG" }
			],

	    "protein_price_details":
			[
				{ "protein_price_score": "000007" },
				{ "protein_price": "5.05", "protein_price_unit": "$/lb", "protein_price_source": "USDA" }
			]
	},

	// ###############################################
	// ################## Chicken ####################
	// ###############################################
	{
	    "protein_id": "000002",
	    "protein_common_name": "Chicken",
	    "protein_species_name": "Gallus gallus domesticus",
	    "protein_type_group": "Animal, Poultry",
        "icon": "chicken.png",

	    "protein_nutrient_details":
			[
				{ "protein_nutrient_score": "000004" },
				{ "protein_content_per_volume": "17.44", "protein_content_per_volume_unit": "g/100g", "protein_content_per_volume_source": "USDA" }
			],

	    "protein_environment_details":
			[
				{ "protein_environmental_score": "000005" },
				{ "protein_water_footprint_per_unit_of_nutritional_value": "3.17", "protein_water_footprint_per_unit_of_nutritional_value_unit": "quarts/kcal", "protein_water_footprint_per_unit_of_nutritional_value_source": "Mekonnen, et al., 2012", },
				{ "protein_CO2_emission": "6.9", "protein_CO2_emission_unit": "kg C02 / kg protein", "protein_CO2_emission_source": "EWG" }
			],

	    "protein_price_details":
			[
				{ "protein_price_score": "000005" },
				{ "protein_price": "2.19", "protein_price_unit": "$/lb", "protein_price_source": "USDA" }
			]
	},

	// ###############################################
	// ################## Chickpeas ##################
	// ###############################################
	{
	    "protein_id": "000003",
	    "protein_common_name": "Chickpea",
	    "protein_species_name": "Cicer arietinum",
	    "protein_type_group": "Plant",
	    "icon": "chicken.png",

	    "protein_nutrient_details":
			[
				{ "protein_nutrient_score": "000003" },
				{ "protein_content_per_volume": "19.3", "protein_content_per_volume_unit": "g/100g", "protein_content_per_volume_source": "USDA" }
			],

	    "protein_environment_details":
			[
				{ "protein_environmental_score": "000002" },
				{ "protein_water_footprint_per_unit_of_nutritional_value": "1.3", "protein_water_footprint_per_unit_of_nutritional_value_unit": "quarts/kcal", "protein_water_footprint_per_unit_of_nutritional_value_source": "Mekonnen, et al., 2012", },
				{ "protein_CO2_emission": "2", "protein_CO2_emission_unit": "kg C02 / kg protein", "protein_CO2_emission_source": "EWG" }
			],

	    "protein_price_details":
			[
				{ "protein_price_score": "000002" },
				{ "protein_price": "0.40", "protein_price_unit": "$/lb", "protein_price_source": "USDA" }
			]
	},

	// ##############################################
	// ################## Crickets ################## 
	// ##############################################
	{
	    "protein_id": "000004",
	    "protein_common_name": "Crickets",
	    "protein_species_name": "Gryllidae",
	    "protein_type_group": "Insect",
	    "icon": "chicken.png",

	    "protein_nutrient_details":
			[
				{ "protein_nutrient_score": "000007" },
				{ "protein_content_per_volume": "12.9", "protein_content_per_volume_unit": "g/100g", "protein_content_per_volume_source": "USDA" }
			],

	    "protein_environment_details":
			[
				{ "protein_environmental_score": "000003" },
				{ "protein_water_footprint_per_unit_of_nutritional_value": "1.5", "protein_water_footprint_per_unit_of_nutritional_value_unit": "quarts/kcal", "protein_water_footprint_per_unit_of_nutritional_value_source": "Unknown", },
				{ "protein_CO2_emission": "2.5", "protein_CO2_emission_unit": "kg C02 / kg protein", "protein_CO2_emission_source": "Unknown" }
			],

	    "protein_price_details":
			[
				{ "protein_price_score": "000003" },
				{ "protein_price": "0.60", "protein_price_unit": "$/lb", "protein_price_source": "Unverified Estimate" }
			]
	},

	// ##########################################
	// ################## Pork ################## 
	// ##########################################
	{
	    "protein_id": "000005",
	    "protein_common_name": "Pork",
	    "protein_species_name": "Sus",
	    "protein_type_group": "Animal",
	    "icon": "chicken.png",

	    "protein_nutrient_details":
			[
				{ "protein_nutrient_score": "000008" },
				{ "protein_content_per_volume": "5.05", "protein_content_per_volume_unit": "g/100g", "protein_content_per_volume_source": "USDA" }
			],

	    "protein_environment_details":
			[
				{ "protein_environmental_score": "000007" },
				{ "protein_water_footprint_per_unit_of_nutritional_value": "2.27", "protein_water_footprint_per_unit_of_nutritional_value_unit": "quarts/kcal", "protein_water_footprint_per_unit_of_nutritional_value_source": "Mekonnen, et al., 2012", },
				{ "protein_CO2_emission": "12.1", "protein_CO2_emission_unit": "kg C02 / kg protein", "protein_CO2_emission_source": "EWG" }
			],

	    "protein_price_details":
			[
				{ "protein_price_score": "000006" },
				{ "protein_price": "3.72", "protein_price_unit": "$/lb", "protein_price_source": "USDA" }
			]
	},

	// ############################################
	// ################## Salmon ##################
	// ############################################
	{
	    "protein_id": "000006",
	    "protein_common_name": "Salmon",
	    "protein_species_name": "Oncorhynchus tshawytscha",
	    "protein_type_group": "Fish",
	    "icon": "chicken.png",

	    "protein_nutrient_details":
			[
				{ "protein_nutrient_score": "000001" },
				{ "protein_content_per_volume": "20.42", "protein_content_per_volume_unit": "g/100g", "protein_content_per_volume_source": "USDA" }
			],

	    "protein_environment_details":
			[
				{ "protein_environmental_score": "" },
				{ "protein_water_footprint_per_unit_of_nutritional_value": "n/a", "protein_water_footprint_per_unit_of_nutritional_value_unit": "quarts/kcal", "protein_water_footprint_per_unit_of_nutritional_value_source": "Mekonnen, et al., 2012", },
				{ "protein_CO2_emission": "11.9", "protein_CO2_emission_unit": "kg C02 / kg protein", "protein_CO2_emission_source": "EWG" }
			],

	    "protein_price_details":
			[
				{ "protein_price_score": "000008" },
				{ "protein_price": "16.46", "protein_price_unit": "$/lb", "protein_price_source": "IMF" }
			]
	},

	// #############################################
	// ################## Soybean ##################
	// #############################################
	{
	    "protein_id": "000007",
	    "protein_common_name": "Soybean",
	    "protein_species_name": "Glycine max",
	    "protein_type_group": "Plant",
	    "icon": "chicken.png",

	    "protein_nutrient_details":
			[
				{ "protein_nutrient_score": "000006" },
				{ "protein_content_per_volume": "12.95", "protein_content_per_volume_unit": "g/100g", "protein_content_per_volume_source": "USDA" }
			],

	    "protein_environment_details":
			[
				{ "protein_environmental_score": "000001" },
				{ "protein_water_footprint_per_unit_of_nutritional_value": "1.2", "protein_water_footprint_per_unit_of_nutritional_value_unit": "quarts/kcal", "protein_water_footprint_per_unit_of_nutritional_value_source": "Mekonnen, et al., 2012", },
				{ "protein_CO2_emission": "2", "protein_CO2_emission_unit": "kg C02 / kg protein", "protein_CO2_emission_source": "EWG" }
			],

	    "protein_price_details":
			[
				{ "protein_price_score": "000001" },
				{ "protein_price": "0.26", "protein_price_unit": "$/lb", "protein_price_source": "USDA" }
			]
	},

	// ##################################################
	// ################## Canned, Tuna ##################
	// ##################################################
	{
	    "protein_id": "000009",
	    "protein_common_name": "Tuna (Yellowfin)",
	    "protein_species_name": "Thunnus albacares",
	    "protein_type_group": "Fish",
	    "icon": "chicken.png",

	    "protein_nutrient_details":
			[
				{ "protein_nutrient_score": "000002" },
				{ "protein_content_per_volume": "19.44", "protein_content_per_volume_unit": "g/100g", "protein_content_per_volume_source": "USDA" }
			],

	    "protein_environment_details":
			[
				{ "protein_environmental_score": "000004" },
				{ "protein_water_footprint_per_unit_of_nutritional_value": "n/a", "protein_water_footprint_per_unit_of_nutritional_value_unit": "quarts/kcal", "protein_water_footprint_per_unit_of_nutritional_value_source": "n/a", },
				{ "protein CO2 emission per (kg CO2/ kg protein)": "6.1", "protein_CO2_emission_unit": "kg C02 / kg protein", "protein CO2 emission per (CO2/kcal) source": "EWG" }
			],

	    "protein_price_details":
			[
				{ "protein_price_score": "000004" },
				{ "protein_price": "1.06", "protein_price_unit": "$/lb", "protein_price_source": "FAO" }
			]
	}
]


