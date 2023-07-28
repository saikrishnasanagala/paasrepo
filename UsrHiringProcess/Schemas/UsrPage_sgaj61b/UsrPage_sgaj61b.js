define("UsrPage_sgaj61b", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "Input_aj8azg2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_l8kjsww",
					"labelPosition": "auto",
					"control": "$StringAttribute_l8kjsww",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_uk9fd89",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_lpye0sw",
					"labelPosition": "auto",
					"control": "$LookupAttribute_lpye0sw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_xvsxtj3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_so8ux7n",
					"labelPosition": "auto",
					"control": "$LookupAttribute_so8ux7n",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_05i2yk5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_pw64er5",
					"labelPosition": "auto",
					"control": "$LookupAttribute_pw64er5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_4f11o5n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_jexnry3",
					"labelPosition": "auto",
					"control": "$LookupAttribute_jexnry3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_t413moy",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_t413moy_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4f11o5n",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_fa69dzz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_qnt0jfd",
					"labelPosition": "auto",
					"control": "$LookupAttribute_qnt0jfd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_l8kjsww": {
					"modelConfig": {
						"path": "UsrEntity_b804796DS.UsrName"
					}
				},
				"LookupAttribute_lpye0sw": {
					"modelConfig": {
						"path": "UsrEntity_b804796DS.UsrOpportunity"
					}
				},
				"LookupAttribute_so8ux7n": {
					"modelConfig": {
						"path": "UsrEntity_b804796DS.UsrProduct"
					}
				},
				"LookupAttribute_qnt0jfd": {
					"modelConfig": {
						"path": "UsrEntity_b804796DS.UsrCandidate"
					}
				},
				"LookupAttribute_pw64er5": {
					"modelConfig": {
						"path": "UsrEntity_b804796DS.UsrAccount"
					}
				},
				"LookupAttribute_jexnry3": {
					"modelConfig": {
						"path": "UsrEntity_b804796DS.UsrColumn7"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"UsrEntity_b804796DS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrEntity_b804796"
					}
				}
			},
			"primaryDataSourceName": "UsrEntity_b804796DS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.LoadDataRequest",
				handler: (request, next) => {
					if (request.dataSourceName == "LookupAttribute_jexnry3_List_DS") {
						this.console.log(request);
					
						return next?.handle(request);
					}
					
					if (request.dataSourceName == "LookupAttribute_qnt0jfd_List_DS") {
						
					
						var names = [];
					
						// getting opportunity field value to filter the oppcandidates
						var Opportunity = request.$context.attributes.LookupAttribute_lpye0sw.value;
						var product = request.$context.attributes.LookupAttribute_so8ux7n.value;
					

						this.console.log(request);
						
						/* Create an instance of the Terrasoft.EntitySchemaQuery class with the Contact root schema. */
						var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
    							rootSchemaName: "UsrEntity_b804796"
								});
						esq.addColumn("UsrCandidate");
						esq.addColumn("UsrOpportunity");
					
						//4cbcb709-64a5-40a0-9388-412ff16889ee
					
						var esqFirstFilter = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "UsrOpportunity", Opportunity);
						esq.filters.add("esqFirstFilter", esqFirstFilter);
					
						esq.getEntityCollection(function (result) {
    						if (!result.success) {
        						/* For example, error processing/logging. */
        						this.console.log("errorrrrr");
        						return;
    						}
    						result.collection.each(function (item) {
        						//names.push(item.get("UsrCandidate"));
								names.push(item.get("UsrCandidate").displayValue);
								request.parameters.push({
							type: "filter",
							value: {
							"filterType": 6,
							"isEnabled": true,
							"items": {
								"CustomFilters": {
									"filterType": 6,
									"isEnabled": true,
									"items": {
										"cb855fc4-4526-475a-beea-8e41a7f5a439": {
											"comparisonType": 4,
											"filterType": 1,
											"isEnabled": true,
											"leftExpression": {
												"expressionType": 0,
												"columnPath": "UsrName"
											},
											"rightExpression": {
												"expressionType": 2,
												"parameter": {
													"dataValueType": 1,
													"value": item.get("UsrCandidate").displayValue
												}
											},
											"trimDateTimeParameterToDate": false
										}
									}
								}
							}
						}});
							
						
   					 		});
							request.parameters.push({
						type: "filter",
						value: {
							"filterType": 6,
							"isEnabled": true,
							"items": {
								"CustomFilters": {
									"filterType": 6,
									"isEnabled": true,
									"items": {
										"cb855fc4-4526-475a-beea-8e41a7f5a439": {
											"comparisonType": 3,
											"filterType": 1,
											"isEnabled": true,
											"leftExpression": {
												"expressionType": 0,
												"columnPath": "UsrRole"
											},
											"rightExpression": {
												"expressionType": 2,
												"parameter": {
													"dataValueType": 1,
													"value": product
												}
											},
											"trimDateTimeParameterToDate": false
										}
									}
								}
							}
						}});
							return  next?.handle(request);
    					
						});

					}
					return next?.handle(request);
				}
				
			}
			
				
				
			
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});