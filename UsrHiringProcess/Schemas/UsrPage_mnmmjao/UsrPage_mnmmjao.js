define("UsrPage_mnmmjao", /**SCHEMA_DEPS*/["ActionDashboardComponent"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "insert",
				"name": "Input_2n6j27w",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_quu8edq",
					"labelPosition": "auto",
					"control": "$StringAttribute_quu8edq",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_qyd28re",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_0snbgh3",
					"labelPosition": "auto",
					"control": "$LookupAttribute_0snbgh3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_etujglt",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_etujglt_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_qyd28re",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2kgox58",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_1x0lh4i",
					"labelPosition": "auto",
					"control": "$LookupAttribute_1x0lh4i",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_t92mqqe",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_t92mqqe_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2kgox58",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_541yvjo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_7bok7ik",
					"labelPosition": "auto",
					"control": "$LookupAttribute_7bok7ik",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_xancj0a",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xancj0a_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_541yvjo",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_g40bnli",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_70ligee",
					"labelPosition": "auto",
					"control": "$LookupAttribute_70ligee",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_006lv69",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_006lv69_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_g40bnli",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_07ney8b",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_5b6ays7",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_z61qgnc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_db8a8eu",
					"labelPosition": "auto",
					"control": "$LookupAttribute_db8a8eu",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_5b6ays7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_eqabz0v",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_eqabz0v_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_z61qgnc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_9floxal",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_7ds4cvv",
					"labelPosition": "auto",
					"control": "$LookupAttribute_7ds4cvv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_5b6ays7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_6blky2i",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6blky2i_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9floxal",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionDashboard_kcl8l2n",
				"values": {
					"type": "crt.ActionDashboard",
					"allowedActions": [
						"Call",
						"Email",
						"Feed",
						"Task"
					],
					"title": "#ResourceString(ActionDashboard_kcl8l2n_title)#",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_jv8ktv8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_b6gl1vp",
					"labelPosition": "auto",
					"control": "$LookupAttribute_b6gl1vp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_tq3qrne",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_lz73ufm",
					"labelPosition": "auto",
					"control": "$LookupAttribute_lz73ufm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_x16a5u1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_x16a5u1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_tq3qrne",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2vwbnqa",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_0ph5mg2",
					"labelPosition": "auto",
					"control": "$LookupAttribute_0ph5mg2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_fxkttct",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fxkttct_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2vwbnqa",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_u4rezpi",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DateTimeAttribute_qipcop1",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_qipcop1",
					"pickerType": "datetime",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"LookupAttribute_7bok7ik": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrCandidate"
					}
				},
				"StringAttribute_quu8edq": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrName"
					}
				},
				"LookupAttribute_0snbgh3": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrMainActicity"
					}
				},
				"LookupAttribute_1x0lh4i": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrProduct"
					}
				},
				"LookupAttribute_b6gl1vp": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrStageOfActivity"
					}
				},
				"LookupAttribute_lz73ufm": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrStatusOfActivity"
					}
				},
				"LookupAttribute_db8a8eu": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrColumn7"
					}
				},
				"LookupAttribute_7ds4cvv": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrAccount"
					}
				},
				"DateTimeAttribute_qipcop1": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrColumn9"
					}
				},
				"LookupAttribute_0ph5mg2": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrInterviewer"
					}
				},
				"LookupAttribute_70ligee": {
					"modelConfig": {
						"path": "UsrEntity_db336deDS.UsrColumn11"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"UsrEntity_db336deDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrEntity_db336de"
					}
				}
			},
			"primaryDataSourceName": "UsrEntity_db336deDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.LoadDataRequest",
				handler: (request, next) => {
					
					var product = request.$context.attributes.LookupAttribute_1x0lh4i.displayValue
;
					
					this.console.log("hrllo there ");
					if (request.dataSourceName !== "LookupAttribute_0ph5mg2_List_DS"){
						return next?.handle(request);
					}
					
					this.console.log(request);

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
											"columnPath": "UsrInterviewer"
										},
										"rightExpression": {
											"expressionType": 2,
											"parameter": {
												"dataValueType": 12,
												"value": true
											}
										},
										"trimDateTimeParameterToDate": false
									}
								}
							}
						}
					}});
					/*request.parameters.push({
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
											"comparisonType": 9,
											"filterType": 1,
											"isEnabled": true,
											"leftExpression": {
												"expressionType": 0,
												"columnPath": "UsrTechnology"
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
						}});*/
					this.console.log(request);
					return  next?.handle(request);
    	
				}
				
			}
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});