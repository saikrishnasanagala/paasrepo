define("UsrPage_3gq7wcs", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
				"name": "Input_jd0aizl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_ig5o3dm",
					"labelPosition": "auto",
					"control": "$StringAttribute_ig5o3dm"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_h9959v5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_u7584k3",
					"labelPosition": "auto",
					"control": "$StringAttribute_u7584k3",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_8yi7ic2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_lemaa0l",
					"labelPosition": "auto",
					"control": "$LookupAttribute_lemaa0l",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_p4ptflw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_p4ptflw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_8yi7ic2",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_wuwhf21",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_pgdq43p",
					"labelPosition": "auto",
					"control": "$LookupAttribute_pgdq43p",
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
				"name": "addRecord_acf5dle",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_acf5dle_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_wuwhf21",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_21j3ee9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_mrr3tmh",
					"labelPosition": "auto",
					"control": "$StringAttribute_mrr3tmh",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PhoneInput_6rpncj7",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.StringAttribute_7tdk3re",
					"labelPosition": "auto",
					"control": "$StringAttribute_7tdk3re"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailInput_yf7213h",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.StringAttribute_sxdtnb7",
					"labelPosition": "auto",
					"control": "$StringAttribute_sxdtnb7"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PhoneInput_3lddzhv",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.StringAttribute_c7vrppq",
					"labelPosition": "auto",
					"control": "$StringAttribute_c7vrppq"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_ig5o3dm": {
					"modelConfig": {
						"path": "UsrEntity_85e7f4eDS.UsrName"
					}
				},
				"StringAttribute_u7584k3": {
					"modelConfig": {
						"path": "UsrEntity_85e7f4eDS.UsrColumn2"
					}
				},
				"LookupAttribute_pgdq43p": {
					"modelConfig": {
						"path": "UsrEntity_85e7f4eDS.UsrColumn3"
					}
				},
				"StringAttribute_mrr3tmh": {
					"modelConfig": {
						"path": "UsrEntity_85e7f4eDS.UsrColumn4"
					}
				},
				"StringAttribute_7tdk3re": {
					"modelConfig": {
						"path": "UsrEntity_85e7f4eDS.UsrColumn5"
					}
				},
				"StringAttribute_c7vrppq": {
					"modelConfig": {
						"path": "UsrEntity_85e7f4eDS.UsrColumn6"
					}
				},
				"StringAttribute_sxdtnb7": {
					"modelConfig": {
						"path": "UsrEntity_85e7f4eDS.UsrColumn7"
					}
				},
				"LookupAttribute_lemaa0l": {
					"modelConfig": {
						"path": "UsrEntity_85e7f4eDS.UsrColumn8"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"UsrEntity_85e7f4eDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrEntity_85e7f4e"
					}
				}
			},
			"primaryDataSourceName": "UsrEntity_85e7f4eDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});