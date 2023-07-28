define("UsrPage_fsmhl29", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"color": "#7575752B",
					"visible": true,
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "fullyColored",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
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
				"operation": "insert",
				"name": "Input_uyc8css",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_tym32pb",
					"labelPosition": "auto",
					"control": "$StringAttribute_tym32pb"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_voff65i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_l3zpqb8",
					"labelPosition": "auto",
					"control": "$StringAttribute_l3zpqb8"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_vwu0t82",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_pcpe5sl",
					"labelPosition": "auto",
					"control": "$LookupAttribute_pcpe5sl",
					"listActions": [],
					"showValueAsLink": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_6lxeo7e",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6lxeo7e_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_vwu0t82",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_uombo9d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_zvhevhn",
					"labelPosition": "auto",
					"control": "$LookupAttribute_zvhevhn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_j2e9tyl",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large"
					},
					"items": [],
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_6pto6pv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_tncw48z",
					"labelPosition": "auto",
					"control": "$LookupAttribute_tncw48z",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_j2e9tyl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_56ktp4u",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_56ktp4u_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_6pto6pv",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_20rvrac",
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
				"name": "ExpansionPanel_2uo3g44",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_2uo3g44_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_zbj28kj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
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
				"parentName": "ExpansionPanel_2uo3g44",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_uzx3a4t",
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
				"parentName": "GridContainer_zbj28kj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_6kgw1at",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
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
				"parentName": "ExpansionPanel_2uo3g44",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_nm3uwop",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_c8jaiy4",
					"labelPosition": "auto",
					"control": "$LookupAttribute_c8jaiy4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_6kgw1at",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_z6homnx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_z6homnx_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_nm3uwop",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_c47icxm",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_mmpj775",
					"labelPosition": "auto",
					"control": "$LookupAttribute_mmpj775",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_6kgw1at",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_ue20i8c",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ue20i8c_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_c47icxm",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_n7b83ei",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_tkdu0p7",
					"labelPosition": "auto",
					"control": "$LookupAttribute_tkdu0p7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_6kgw1at",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_vuqq5ar",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vuqq5ar_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_n7b83ei",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_3my0vmm",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_6uwrn3x",
					"labelPosition": "auto",
					"control": "$StringAttribute_6uwrn3x"
				},
				"parentName": "GridContainer_6kgw1at",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_sweiyoa",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_w9cb652",
					"labelPosition": "auto",
					"control": "$StringAttribute_w9cb652",
					"multiline": false
				},
				"parentName": "ExpansionPanel_2uo3g44",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_nk9t2vz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_nk9t2vz_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": "50",
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_f0x3lti",
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
				"parentName": "ExpansionPanel_nk9t2vz",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2d7wp43",
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
				"parentName": "GridContainer_f0x3lti",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_02nqle8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
				"parentName": "ExpansionPanel_nk9t2vz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_67lrh0m",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_jbxe0fg",
					"labelPosition": "auto",
					"control": "$StringAttribute_jbxe0fg"
				},
				"parentName": "GridContainer_02nqle8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_mu96adq",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_r70219v",
					"labelPosition": "auto",
					"control": "$StringAttribute_r70219v"
				},
				"parentName": "GridContainer_02nqle8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailInput_rq1rrzp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.StringAttribute_12kyg5b",
					"labelPosition": "auto",
					"control": "$StringAttribute_12kyg5b"
				},
				"parentName": "GridContainer_02nqle8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PhoneInput_g0ahv14",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.StringAttribute_j0rgaps",
					"labelPosition": "auto",
					"control": "$StringAttribute_j0rgaps"
				},
				"parentName": "GridContainer_02nqle8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_bjrx84k",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_bjrx84k_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "diagram-tab-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_v85ll8b",
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
				"parentName": "TabContainer_bjrx84k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_b69gapp",
				"values": {
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_b69gapp",
					"primaryColumnName": "DataGrid_b69gappDS_Id",
					"columns": [
						{
							"id": "e051c0fb-9d8f-9223-ed99-74456e23e0f9",
							"code": "DataGrid_b69gappDS_UsrName",
							"caption": "#ResourceString(DataGrid_b69gappDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "TabContainer_bjrx84k",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_9agkkma",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_9agkkma_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "folder-tab-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_xulj6u5",
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
				"parentName": "TabContainer_9agkkma",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_yanj619",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_yanj619_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": "50",
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "TabContainer_9agkkma",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_a1zf412",
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
				"parentName": "ExpansionPanel_yanj619",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_fz6iwsn",
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
				"parentName": "GridContainer_a1zf412",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_sr02mto",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_sr02mto_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_z3oyyww"
						}
					}
				},
				"parentName": "FlexContainer_fz6iwsn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_l4zagtx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_l4zagtx_caption)#",
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
							"dataSourceName": "FileList_z3oyywwDS"
						}
					}
				},
				"parentName": "FlexContainer_fz6iwsn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_euxn9d6",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_euxn9d6_placeholder)#",
					"targetAttributes": [
						"FileList_z3oyyww"
					]
				},
				"parentName": "FlexContainer_fz6iwsn",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_hlmy02b",
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
				"parentName": "ExpansionPanel_yanj619",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_z3oyyww",
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
					"items": "$FileList_z3oyyww",
					"primaryColumnName": "FileList_z3oyywwDS_Id",
					"columns": [
						{
							"id": "6120e4a2-de5b-c647-e4f1-18946516f3ba",
							"code": "FileList_z3oyywwDS_Name",
							"caption": "#ResourceString(FileList_z3oyywwDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "af04141d-a60c-b807-825a-5fd8a2295e38",
							"code": "FileList_z3oyywwDS_CreatedOn",
							"caption": "#ResourceString(FileList_z3oyywwDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "90693fe3-275d-57e1-66cb-f47eb6d92f04",
							"code": "FileList_z3oyywwDS_CreatedBy",
							"caption": "#ResourceString(FileList_z3oyywwDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "cad7266a-9c00-5041-58b7-6d50a61833f8",
							"code": "FileList_z3oyywwDS_Size",
							"caption": "#ResourceString(FileList_z3oyywwDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"viewType": "gallery",
					"tileSize": "large"
				},
				"parentName": "GridContainer_hlmy02b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_9xs5dfs",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_9xs5dfs_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_qgibizs",
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
				},
				"parentName": "TabContainer_9xs5dfs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ebrk84o",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 6
					},
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_ebrk84o",
					"primaryColumnName": "DataGrid_ebrk84oDS_Id",
					"columns": [
						{
							"id": "a0a8a16c-def7-e084-cb2a-5a897c2edb6c",
							"code": "DataGrid_ebrk84oDS_UsrName",
							"caption": "#ResourceString(DataGrid_ebrk84oDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_qgibizs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_h6p5kxl",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_h6p5kxl_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "organizational-structure-tab-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_12m6aol",
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
				"parentName": "TabContainer_h6p5kxl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_s1zb9n3",
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
					"title": "#ResourceString(ExpansionPanel_s1zb9n3_title)#",
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
				"parentName": "GridContainer_12m6aol",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_kgp7p26",
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
				"parentName": "ExpansionPanel_s1zb9n3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7ydcgcj",
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
				"parentName": "GridContainer_kgp7p26",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ezvvgjt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ezvvgjt_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrEntity_a103027",
							"defaultValues": [
								{
									"attributeName": "UsrCandidate",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_7ydcgcj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_1b2ghx8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_1b2ghx8_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"config": {
							"loadType": "reload"
						}
					}
				},
				"parentName": "FlexContainer_7ydcgcj",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_2kacyme",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_2kacyme_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_7ydcgcj",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_2ym0qub",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_2ym0qub_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest"
					}
				},
				"parentName": "GridDetailSettingsBtn_2kacyme",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_kggwu0k",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_kggwu0k_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest"
					}
				},
				"parentName": "GridDetailSettingsBtn_2kacyme",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_e080rgb",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_e080rgb_placeholder)#",
					"iconOnly": true
				},
				"parentName": "FlexContainer_7ydcgcj",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_vmoxvit",
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
				"parentName": "ExpansionPanel_s1zb9n3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_scy2akc",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_scy2akc",
					"primaryColumnName": "DataGrid_scy2akcDS_Id",
					"columns": [
						{
							"id": "5745b3f3-ab9a-28c7-aee4-402d54463ad4",
							"code": "DataGrid_scy2akcDS_UsrName",
							"caption": "#ResourceString(DataGrid_scy2akcDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_vmoxvit",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_tym32pb": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrName"
					}
				},
				"LookupAttribute_pcpe5sl": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrRole"
					}
				},
				"DataGrid_ebrk84o": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_ebrk84oDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_ebrk84oDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_ebrk84oDS.UsrName"
								}
							},
							"DataGrid_ebrk84oDS_Id": {
								"modelConfig": {
									"path": "DataGrid_ebrk84oDS.Id"
								}
							}
						}
					}
				},
				"FileList_z3oyyww": {
					"isCollection": true,
					"modelConfig": {
						"path": "FileList_z3oyywwDS",
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
							"FileList_z3oyywwDS_Name": {
								"modelConfig": {
									"path": "FileList_z3oyywwDS.Name"
								}
							},
							"FileList_z3oyywwDS_CreatedOn": {
								"modelConfig": {
									"path": "FileList_z3oyywwDS.CreatedOn"
								}
							},
							"FileList_z3oyywwDS_CreatedBy": {
								"modelConfig": {
									"path": "FileList_z3oyywwDS.CreatedBy"
								}
							},
							"FileList_z3oyywwDS_Size": {
								"modelConfig": {
									"path": "FileList_z3oyywwDS.Size"
								}
							},
							"FileList_z3oyywwDS_Id": {
								"modelConfig": {
									"path": "FileList_z3oyywwDS.Id"
								}
							}
						}
					}
				},
				"Id": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.Id"
					}
				},
				"DataGrid_b69gapp": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_b69gappDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_b69gappDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_b69gappDS.UsrName"
								}
							},
							"DataGrid_b69gappDS_Id": {
								"modelConfig": {
									"path": "DataGrid_b69gappDS.Id"
								}
							}
						}
					}
				},
				"LookupAttribute_zvhevhn": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrTechnology"
					}
				},
				"DataGrid_scy2akc": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_scy2akcDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_scy2akcDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_scy2akcDS.UsrName"
								}
							},
							"DataGrid_scy2akcDS_Id": {
								"modelConfig": {
									"path": "DataGrid_scy2akcDS.Id"
								}
							}
						}
					}
				},
				"LookupAttribute_tncw48z": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrColumn8"
					}
				},
				"LookupAttribute_c8jaiy4": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrColumn9"
					}
				},
				"LookupAttribute_mmpj775": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrColumn10"
					}
				},
				"LookupAttribute_tkdu0p7": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrColumn11"
					}
				},
				"StringAttribute_6uwrn3x": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrColumn12"
					}
				},
				"StringAttribute_w9cb652": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrColumn13"
					}
				},
				"StringAttribute_r70219v": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrAdharNumber"
					}
				},
				"StringAttribute_jbxe0fg": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrPANNUmber"
					}
				},
				"StringAttribute_12kyg5b": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrColumn14"
					}
				},
				"StringAttribute_j0rgaps": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrColumn15"
					}
				},
				"StringAttribute_l3zpqb8": {
					"modelConfig": {
						"path": "UsrApp_gruyofaDS.UsrFullName"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"UsrApp_gruyofaDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "UsrApp_gruyofa"
					}
				},
				"DataGrid_ebrk84oDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrApp_lji2bjq",
						"attributes": {
							"UsrName": {
								"path": "UsrName"
							}
						}
					}
				},
				"FileList_z3oyywwDS": {
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
				"DataGrid_b69gappDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrEntity_17a09b5",
						"attributes": {
							"UsrName": {
								"path": "UsrName"
							}
						}
					}
				},
				"DataGrid_scy2akcDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrEntity_a103027",
						"attributes": {
							"UsrName": {
								"path": "UsrName"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "UsrApp_gruyofaDS",
			"dependencies": {
				"DataGrid_ebrk84oDS": [
					{
						"attributePath": "UsrCandidate",
						"relationPath": "UsrApp_gruyofaDS.Id"
					}
				],
				"DataGrid_b69gappDS": [
					{
						"attributePath": "UsrCandidate",
						"relationPath": "UsrApp_gruyofaDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});