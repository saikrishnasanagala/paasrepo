define("UsrApp_fplmarm_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "fullyColored",
					"mode": "tab",
					"bodyBackgroundColor": "#FFFFFF",
					"selectedTabTitleColor": "#000000",
					"tabTitleColor": "#FFFFFF",
					"underlineSelectedTabColor": "crt-color-primary-black",
					"headerBackgroundColor": "crt-color-primary-grey",
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
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
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrApp_fplmarm"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "081e3d34-9c43-43e9-b74f-b82c5ed3a7ff",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false,
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
				"name": "GridContainer_4h6qirz",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_0u3zbzz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_rtt96pa",
					"labelPosition": "auto",
					"control": "$LookupAttribute_rtt96pa",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_4h6qirz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_sw34slj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_64x0zi5",
					"labelPosition": "auto",
					"control": "$LookupAttribute_64x0zi5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_4h6qirz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_5qls7gm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_d5q1g84",
					"labelPosition": "auto",
					"control": "$LookupAttribute_d5q1g84",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_4h6qirz",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_vj0b9ev",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_3d2s1y3",
					"labelPosition": "auto",
					"control": "$LookupAttribute_3d2s1y3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_4h6qirz",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_7j12tfj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_2w8c3m1",
					"labelPosition": "auto",
					"control": "$NumberAttribute_2w8c3m1",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_e4m43et",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_ra4nij4",
					"labelPosition": "auto",
					"control": "$StringAttribute_ra4nij4",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_6tcziv4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DateTimeAttribute_u4a2pae",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_u4a2pae",
					"pickerType": "datetime",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_ty0i5zt",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_fef08q5",
					"labelPosition": "auto",
					"control": "$LookupAttribute_fef08q5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_01mn25g",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_t5wlo00",
					"labelPosition": "auto",
					"control": "$LookupAttribute_t5wlo00",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_t46tomq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_t46tomq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_01mn25g",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_6mn32k8",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DateTimeAttribute_2h8gz32",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_2h8gz32",
					"pickerType": "date"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_a0lpjl0",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_76lygdr",
					"labelPosition": "above",
					"control": "$StringAttribute_76lygdr",
					"multiline": false,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_dk88l6a",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_dk88l6a_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "folder-tab-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_2c91w2x",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_dk88l6a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ardh01n",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ardh01n_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "TabContainer_dk88l6a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_tiat8cr",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ardh01n",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rggfzy0",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_tiat8cr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_rumb8nc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_rumb8nc_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_jtj8w9p"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_rggfzy0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_0bcr87v",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_0bcr87v_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "FileList_jtj8w9pDS"
						}
					}
				},
				"parentName": "FlexContainer_rggfzy0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_4w1av1h",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_4w1av1h_placeholder)#",
					"targetAttributes": [
						"FileList_jtj8w9p"
					]
				},
				"parentName": "FlexContainer_rggfzy0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_64i3dcx",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ardh01n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_jtj8w9p",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"items": "$FileList_jtj8w9p",
					"primaryColumnName": "FileList_jtj8w9pDS_Id",
					"columns": [
						{
							"id": "06b65648-0953-b8f5-524c-47dc9097c4bc",
							"code": "FileList_jtj8w9pDS_Name",
							"caption": "#ResourceString(FileList_jtj8w9pDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "d05ea081-4759-4419-283c-89027c510d89",
							"code": "FileList_jtj8w9pDS_CreatedOn",
							"caption": "#ResourceString(FileList_jtj8w9pDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "c9c1b689-c7d8-1d31-cd9f-ace10138644c",
							"code": "FileList_jtj8w9pDS_CreatedBy",
							"caption": "#ResourceString(FileList_jtj8w9pDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "7f5381bb-ab2f-4a16-251c-d42f9690381d",
							"code": "FileList_jtj8w9pDS_Size",
							"caption": "#ResourceString(FileList_jtj8w9pDS_Size)#",
							"dataValueType": 4
						}
					]
				},
				"parentName": "GridContainer_64i3dcx",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"LookupAttribute_rtt96pa": {
					"modelConfig": {
						"path": "PDS.UsrAccount"
					}
				},
				"LookupAttribute_64x0zi5": {
					"modelConfig": {
						"path": "PDS.UsrOpportunity"
					}
				},
				"LookupAttribute_d5q1g84": {
					"modelConfig": {
						"path": "PDS.UsrCAndidate"
					}
				},
				"LookupAttribute_3d2s1y3": {
					"modelConfig": {
						"path": "PDS.UsrMactivity"
					}
				},
				"DateTimeAttribute_u4a2pae": {
					"modelConfig": {
						"path": "PDS.UsrDOJ"
					}
				},
				"StringAttribute_ra4nij4": {
					"modelConfig": {
						"path": "PDS.UsrWorklocation"
					}
				},
				"StringAttribute_76lygdr": {
					"modelConfig": {
						"path": "PDS.UsrDescription"
					}
				},
				"NumberAttribute_2w8c3m1": {
					"modelConfig": {
						"path": "PDS.UsrAnualCTC"
					}
				},
				"LookupAttribute_fef08q5": {
					"modelConfig": {
						"path": "PDS.UsrWorktype"
					}
				},
				"LookupAttribute_t5wlo00": {
					"modelConfig": {
						"path": "PDS.UsrShift"
					}
				},
				"FileList_jtj8w9p": {
					"isCollection": true,
					"modelConfig": {
						"path": "FileList_jtj8w9pDS",
						"sortingConfig": {
							"default": [
								{
									"columnName": "CreatedOn",
									"direction": "desc"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"FileList_jtj8w9pDS_Name": {
								"modelConfig": {
									"path": "FileList_jtj8w9pDS.Name"
								}
							},
							"FileList_jtj8w9pDS_CreatedOn": {
								"modelConfig": {
									"path": "FileList_jtj8w9pDS.CreatedOn"
								}
							},
							"FileList_jtj8w9pDS_CreatedBy": {
								"modelConfig": {
									"path": "FileList_jtj8w9pDS.CreatedBy"
								}
							},
							"FileList_jtj8w9pDS_Size": {
								"modelConfig": {
									"path": "FileList_jtj8w9pDS.Size"
								}
							},
							"FileList_jtj8w9pDS_Id": {
								"modelConfig": {
									"path": "FileList_jtj8w9pDS.Id"
								}
							}
						}
					}
				},
				"DateTimeAttribute_2h8gz32": {
					"modelConfig": {
						"path": "PDS.UsrColumn12"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrApp_fplmarm"
					},
					"scope": "page"
				},
				"AttachmentListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SysFile",
						"attributes": {
							"Name": {
								"path": "Name"
							}
						}
					}
				},
				"FileList_jtj8w9pDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SysFile",
						"attributes": {
							"Name": {
								"path": "Name"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							},
							"CreatedBy": {
								"path": "CreatedBy"
							},
							"Size": {
								"path": "Size"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});