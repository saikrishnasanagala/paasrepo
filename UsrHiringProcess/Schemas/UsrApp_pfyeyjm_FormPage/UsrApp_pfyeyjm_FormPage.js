define("UsrApp_pfyeyjm_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
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
					"entitySchemaName": "UsrApp_pfyeyjm"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "06d1cde9-0c16-44f1-824c-9c52ba32187d",
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
				"name": "Button_w2xvylv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_w2xvylv_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "extra-large",
					"iconPosition": "only-text",
					"visible": false,
					"layoutConfig": {},
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_b101d06",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
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
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_292fjkg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_jpe1h6a",
					"labelPosition": "auto",
					"control": "$LookupAttribute_jpe1h6a",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_l8frflf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_l8frflf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_292fjkg",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ojprhsn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_d2w0tff",
					"labelPosition": "auto",
					"control": "$LookupAttribute_d2w0tff",
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
				"name": "addRecord_eh95dnm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_eh95dnm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ojprhsn",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_gqv7qfj",
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
				"name": "ComboBox_hnfsxgr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_fcydy7f",
					"labelPosition": "auto",
					"control": "$LookupAttribute_fcydy7f",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_gqv7qfj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_15vxhhz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_15vxhhz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hnfsxgr",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_bmuxpy4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_hn4n600",
					"labelPosition": "auto",
					"control": "$LookupAttribute_hn4n600",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_d0yj8io",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_xcqe86e",
					"labelPosition": "auto",
					"control": "$LookupAttribute_xcqe86e",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_x013lxi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_rmrb3rl",
					"labelPosition": "auto",
					"control": "$LookupAttribute_rmrb3rl",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_fhd8sew",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_01hk7zj",
					"labelPosition": "auto",
					"control": "$LookupAttribute_01hk7zj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_hyrt75a",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_y69zzc8",
					"labelPosition": "auto",
					"control": "$NumberAttribute_y69zzc8"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_nu2ibj9",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_c2dei9j",
					"labelPosition": "auto",
					"control": "$NumberAttribute_c2dei9j"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TabContainer_v51y7fh",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_v51y7fh_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_lf5ar4p",
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
				"parentName": "TabContainer_v51y7fh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_q057uan",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_q057uan_title)#",
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
				"parentName": "GridContainer_lf5ar4p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_as9jhfz",
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
				"parentName": "ExpansionPanel_q057uan",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_g5bcpy3",
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
				"parentName": "GridContainer_as9jhfz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_6n63v1p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_6n63v1p_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_j9334et"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_g5bcpy3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_e0jo87v",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_e0jo87v_caption)#",
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
							"dataSourceName": "FileList_j9334etDS"
						}
					}
				},
				"parentName": "FlexContainer_g5bcpy3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_fk1po41",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_fk1po41_placeholder)#",
					"targetAttributes": [
						"FileList_j9334et"
					]
				},
				"parentName": "FlexContainer_g5bcpy3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_nu5q651",
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
				"parentName": "ExpansionPanel_q057uan",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_j9334et",
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
					"items": "$FileList_j9334et",
					"primaryColumnName": "FileList_j9334etDS_Id",
					"columns": [
						{
							"id": "876de088-a72f-d899-771c-94f1b865afdc",
							"code": "FileList_j9334etDS_Name",
							"caption": "#ResourceString(FileList_j9334etDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "64bf0158-1ad8-e6be-66e6-8c3086b73834",
							"code": "FileList_j9334etDS_CreatedOn",
							"caption": "#ResourceString(FileList_j9334etDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "fdec1e98-de8e-50d7-8983-10e871ae532e",
							"code": "FileList_j9334etDS_CreatedBy",
							"caption": "#ResourceString(FileList_j9334etDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "bf86ef41-6a51-c644-46da-dc1267543066",
							"code": "FileList_j9334etDS_Size",
							"caption": "#ResourceString(FileList_j9334etDS_Size)#",
							"dataValueType": 4
						}
					]
				},
				"parentName": "GridContainer_nu5q651",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_zpf7efh",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_zpf7efh_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_st1vv0z",
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
				"parentName": "TabContainer_zpf7efh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_yrbg6b1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 8
					},
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_yrbg6b1",
					"primaryColumnName": "DataGrid_yrbg6b1DS_Id",
					"columns": [
						{
							"id": "0143c754-943d-f87f-3c42-3147d9a9d0d2",
							"code": "DataGrid_yrbg6b1DS_UsrName",
							"caption": "#ResourceString(DataGrid_yrbg6b1DS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_st1vv0z",
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
				"LookupAttribute_hn4n600": {
					"modelConfig": {
						"path": "PDS.UsrCandidate"
					}
				},
				"LookupAttribute_xcqe86e": {
					"modelConfig": {
						"path": "PDS.UsrOpportunity"
					}
				},
				"LookupAttribute_jpe1h6a": {
					"modelConfig": {
						"path": "PDS.UsrAccount"
					}
				},
				"NumberAttribute_y69zzc8": {
					"modelConfig": {
						"path": "PDS.UsrPrice"
					}
				},
				"NumberAttribute_c2dei9j": {
					"modelConfig": {
						"path": "PDS.UsrClientBudget"
					},
					"validators": {
						"MyValidator": {
							"type": "usr.MyValidator",
							"params": {
								"invalidName": "10",
								"message": "required more then 10"
							}
						},
						"required": {
							"type": "crt.Required"
						}
					}
				},
				"LookupAttribute_rmrb3rl": {
					"modelConfig": {
						"path": "PDS.Usrproduct"
					}
				},
				"LookupAttribute_01hk7zj": {
					"modelConfig": {
						"path": "PDS.UsrActivity"
					}
				},
				"LookupAttribute_fcydy7f": {
					"modelConfig": {
						"path": "PDS.UsrColumn10"
					}
				},
				"LookupAttribute_d2w0tff": {
					"modelConfig": {
						"path": "PDS.UsrColumn11"
					}
				},
				"FileList_j9334et": {
					"isCollection": true,
					"modelConfig": {
						"path": "FileList_j9334etDS",
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
							"FileList_j9334etDS_Name": {
								"modelConfig": {
									"path": "FileList_j9334etDS.Name"
								}
							},
							"FileList_j9334etDS_CreatedOn": {
								"modelConfig": {
									"path": "FileList_j9334etDS.CreatedOn"
								}
							},
							"FileList_j9334etDS_CreatedBy": {
								"modelConfig": {
									"path": "FileList_j9334etDS.CreatedBy"
								}
							},
							"FileList_j9334etDS_Size": {
								"modelConfig": {
									"path": "FileList_j9334etDS.Size"
								}
							},
							"FileList_j9334etDS_Id": {
								"modelConfig": {
									"path": "FileList_j9334etDS.Id"
								}
							}
						}
					}
				},
				"DataGrid_yrbg6b1": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_yrbg6b1DS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_yrbg6b1DS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_yrbg6b1DS.UsrName"
								}
							},
							"DataGrid_yrbg6b1DS_Id": {
								"modelConfig": {
									"path": "DataGrid_yrbg6b1DS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrApp_pfyeyjm"
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
				"FileList_j9334etDS": {
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
				},
				"DataGrid_yrbg6b1DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrEntity_db336de",
						"attributes": {
							"UsrName": {
								"path": "UsrName"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"DataGrid_yrbg6b1DS": [
					{
						"attributePath": "UsrMainActicity",
						"relationPath": "PDS.UsrActivity"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
    {
        request: "crt.HandleViewModelAttributeChangeRequest",
        /* The custom implementation of the system query handler. */
        handler: async (request, next) => {
			this.console.log(request);
            if (request.attributeName === 'LookupAttribute_a0jiuet_List') {
				request.$context.disableAttributeValidator( 'NumberAttribute_c2dei9j', 'required');
                const newStatusId = '77574bfc-8abb-4708-8513-dff556cb4739';
                const selectedStatus = await request.$context.attributes.LookupAttribute_a0jiuet;
                const selectedStatusId = selectedStatus?.value;
                const isNewRequest = selectedStatusId === newStatusId;
                /* Check the request status. */
				/*
                if (isNewRequest) {
                    / If the request is new, apply the required validator to the UsrDescription attribute. /
                    request.$context.enableAttributeValidator('NumberAttribute_c2dei9j', 'required');
                } else {
                    / Do not apply the required validator to the UsrDescription attribute for non-new requests. /
                    request.$context.disableAttributeValidator( 'NumberAttribute_c2dei9j', 'required');
                }*/
            }
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
        }
    }
]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			
    		/* The validator type must contain a vendor prefix.
    		Format the validator type in PascalCase. */
    		"usr.MyValidator": {
        		"validator": function (config) {
            		return function (control) {
                		return control.value >= config.invalidName ? null: {
                    		"usr.MyValidator": { message: config.message }
                		};
            		};
        		},
        	"params": [
            	{
                	"name": "invalidName"
            	},
            	{
                	"name": "message"
            	}
        	],
        	"async": false
    		}
		}/**SCHEMA_VALIDATORS*/
	};
});