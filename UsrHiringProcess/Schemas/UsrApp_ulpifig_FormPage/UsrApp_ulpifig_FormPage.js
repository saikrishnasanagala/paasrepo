define("UsrApp_ulpifig_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
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
					"entitySchemaName": "UsrApp_ulpifig"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "bfded8b0-757b-4f0a-bd74-3397f85ef6e8",
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
				"name": "Input_x39ah0f",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_9wy5bo1",
					"labelPosition": "auto",
					"control": "$StringAttribute_9wy5bo1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_mc72qab",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_badofe1",
					"labelPosition": "auto",
					"control": "$StringAttribute_badofe1",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_mfs02b7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_yi4wx5s",
					"labelPosition": "auto",
					"control": "$LookupAttribute_yi4wx5s",
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
				"name": "addRecord_sf2ipwy",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_sf2ipwy_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_mfs02b7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zhi6p8r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_hcosx5s",
					"labelPosition": "auto",
					"control": "$LookupAttribute_hcosx5s",
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
				"name": "addRecord_63ixnkq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_63ixnkq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zhi6p8r",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_tslhwb6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_wxtziei",
					"labelPosition": "auto",
					"control": "$LookupAttribute_wxtziei",
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
				"name": "addRecord_36cemuj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_36cemuj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_tslhwb6",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2htveqq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_rnkbtdk",
					"labelPosition": "auto",
					"control": "$LookupAttribute_rnkbtdk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_mlkdvm7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mlkdvm7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2htveqq",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_ltg3yks",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_ltg3yks_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_pp1pr13",
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
				"parentName": "TabContainer_ltg3yks",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_gqkd49r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DateTimeAttribute_dzkwm4y",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_dzkwm4y",
					"pickerType": "datetime"
				},
				"parentName": "GridContainer_pp1pr13",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_exfshq9",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_1a3g157",
					"labelPosition": "auto",
					"control": "$NumberAttribute_1a3g157"
				},
				"parentName": "GridContainer_pp1pr13",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_4zush48",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_sp1xhv9",
					"labelPosition": "auto",
					"control": "$LookupAttribute_sp1xhv9",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_pp1pr13",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_tmfxesk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tmfxesk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4zush48",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_cmov3uv",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_2p1fxqx",
					"labelPosition": "auto",
					"control": "$LookupAttribute_2p1fxqx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_pp1pr13",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_jxvbxcy",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jxvbxcy_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_cmov3uv",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_5g7x00h",
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
					"title": "#ResourceString(ExpansionPanel_5g7x00h_title)#",
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
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_5h6k9ex",
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
				"parentName": "ExpansionPanel_5g7x00h",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wzjn5b1",
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
				"parentName": "GridContainer_5h6k9ex",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_4d3d6lf",
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
				"parentName": "ExpansionPanel_5g7x00h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ooee5ss",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_xbsptt7",
					"labelPosition": "auto",
					"control": "$LookupAttribute_xbsptt7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_4d3d6lf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_6soxx1d",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6soxx1d_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ooee5ss",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_49qkdmp",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_m94u661",
					"labelPosition": "auto",
					"control": "$LookupAttribute_m94u661",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_4d3d6lf",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_xikcnas",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xikcnas_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_49qkdmp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_d14aj7l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_osg47f4",
					"labelPosition": "auto",
					"control": "$LookupAttribute_osg47f4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_4d3d6lf",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_y4sgvyq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_y4sgvyq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_d14aj7l",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_4uhz20d",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_lrded17",
					"labelPosition": "auto",
					"control": "$StringAttribute_lrded17",
					"multiline": false
				},
				"parentName": "GridContainer_4d3d6lf",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_6i7wigm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_1q00zlz",
					"labelPosition": "auto",
					"control": "$StringAttribute_1q00zlz",
					"multiline": false
				},
				"parentName": "GridContainer_4d3d6lf",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_8paraky",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_8paraky_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_8ieo2w5",
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
				"parentName": "ExpansionPanel_8paraky",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_52q2t5b",
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
				"parentName": "GridContainer_8ieo2w5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_35rdcze",
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
				"parentName": "ExpansionPanel_8paraky",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_bu4clsv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_10qsqvd",
					"labelPosition": "auto",
					"control": "$StringAttribute_10qsqvd",
					"multiline": false
				},
				"parentName": "GridContainer_35rdcze",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_drtwzh2",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_h4psnas",
					"labelPosition": "auto",
					"control": "$StringAttribute_h4psnas",
					"multiline": false
				},
				"parentName": "GridContainer_35rdcze",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailInput_7xa1ntd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.StringAttribute_drngjo1",
					"labelPosition": "auto",
					"control": "$StringAttribute_drngjo1"
				},
				"parentName": "GridContainer_35rdcze",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PhoneInput_368itsr",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.StringAttribute_npivivz",
					"labelPosition": "auto",
					"control": "$StringAttribute_npivivz"
				},
				"parentName": "GridContainer_35rdcze",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_zbgqx4d",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_zbgqx4d_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ub3pa35",
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
				"parentName": "TabContainer_zbgqx4d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_a0nnnf1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 4
					},
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_a0nnnf1",
					"primaryColumnName": "DataGrid_a0nnnf1DS_Id",
					"columns": [
						{
							"id": "3b31496d-cf31-ea48-f969-285b9bf84f8a",
							"code": "DataGrid_a0nnnf1DS_UsrName",
							"caption": "#ResourceString(DataGrid_a0nnnf1DS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_ub3pa35",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_czn15iu",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_czn15iu_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "diagram-tab-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_vilu0wp",
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
				"parentName": "TabContainer_czn15iu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_wmtgy8i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 5
					},
					"type": "crt.DataGrid",
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_wmtgy8i",
					"primaryColumnName": "DataGrid_wmtgy8iDS_Id",
					"columns": [
						{
							"id": "3f75bbb4-1dd8-d154-7ba8-3b90dbaf61ad",
							"code": "DataGrid_wmtgy8iDS_UsrName",
							"caption": "#ResourceString(DataGrid_wmtgy8iDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_vilu0wp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_s85gdd6",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_s85gdd6_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "checkbox-tab-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_6bb4ycd",
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
				"parentName": "TabContainer_s85gdd6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_faofj7z",
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
					"items": "$DataGrid_faofj7z",
					"primaryColumnName": "DataGrid_faofj7zDS_Id",
					"columns": [
						{
							"id": "d6ab1d46-5c60-7b1f-4604-a5b7ecc5cf18",
							"code": "DataGrid_faofj7zDS_UsrName",
							"caption": "#ResourceString(DataGrid_faofj7zDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_6bb4ycd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_8vok9jd",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_8vok9jd_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "organizational-structure-tab-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_v1uq2tm",
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
				"parentName": "TabContainer_8vok9jd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_69j2z8p",
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
					"title": "#ResourceString(ExpansionPanel_69j2z8p_title)#",
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
					},
					"visible": true
				},
				"parentName": "GridContainer_v1uq2tm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_hldd9o3",
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
				"parentName": "ExpansionPanel_69j2z8p",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bfp9b93",
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
				"parentName": "GridContainer_hldd9o3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_64cf1cd",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_64cf1cd_caption)#",
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
									"value": "$LookupAttribute_yi4wx5s"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_bfp9b93",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_59539fk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_59539fk_caption)#",
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
				"parentName": "FlexContainer_bfp9b93",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_cdb284w",
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
				"parentName": "ExpansionPanel_69j2z8p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_vbvjxh0",
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
					"items": "$DataGrid_vbvjxh0",
					"primaryColumnName": "DataGrid_vbvjxh0DS_Id",
					"columns": [
						{
							"id": "4aaa2845-6e72-cad0-b09b-fb58fae43904",
							"code": "DataGrid_vbvjxh0DS_UsrName",
							"caption": "#ResourceString(DataGrid_vbvjxh0DS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_cdb284w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_bp5fhme",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_bp5fhme_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_puvre1x",
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
				"parentName": "TabContainer_bp5fhme",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_7c65imp",
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
					"title": "#ResourceString(ExpansionPanel_7c65imp_title)#",
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
				"parentName": "GridContainer_puvre1x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_q4bfp1h",
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
				"parentName": "ExpansionPanel_7c65imp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_hbxlve2",
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
				"parentName": "GridContainer_q4bfp1h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_betvnt6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_betvnt6_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_hdkqwlm"
						}
					}
				},
				"parentName": "FlexContainer_hbxlve2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_p427g2s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_p427g2s_caption)#",
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
							"dataSourceName": "FileList_hdkqwlmDS"
						}
					}
				},
				"parentName": "FlexContainer_hbxlve2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_hj5g39v",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_hj5g39v_placeholder)#",
					"targetAttributes": [
						"FileList_hdkqwlm"
					]
				},
				"parentName": "FlexContainer_hbxlve2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_kp32v40",
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
				"parentName": "ExpansionPanel_7c65imp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_hdkqwlm",
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
					"items": "$FileList_hdkqwlm",
					"primaryColumnName": "FileList_hdkqwlmDS_Id",
					"columns": [
						{
							"id": "590c7d44-e7be-a089-7869-2653ba2e967f",
							"code": "FileList_hdkqwlmDS_Name",
							"caption": "#ResourceString(FileList_hdkqwlmDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "7a7f6cba-52e5-3604-36eb-e09b6db87b5b",
							"code": "FileList_hdkqwlmDS_CreatedOn",
							"caption": "#ResourceString(FileList_hdkqwlmDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "1907574e-35ac-8ebe-b9bb-b8d0ccbc5080",
							"code": "FileList_hdkqwlmDS_CreatedBy",
							"caption": "#ResourceString(FileList_hdkqwlmDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "396a2876-39fd-c193-b567-cf170144b60e",
							"code": "FileList_hdkqwlmDS_Size",
							"caption": "#ResourceString(FileList_hdkqwlmDS_Size)#",
							"dataValueType": 4
						}
					]
				},
				"parentName": "GridContainer_kp32v40",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_9nua4jn",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_9nua4jn_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vl3105m",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_9nua4jn",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_l8jx33j",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(Label_l8jx33j_caption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "FlexContainer_vl3105m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_8yj44kl",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_9nua4jn",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"StringAttribute_badofe1": {
					"modelConfig": {
						"path": "PDS.UsrColumn2"
					}
				},
				"LookupAttribute_hcosx5s": {
					"modelConfig": {
						"path": "PDS.UsrColumn3"
					}
				},
				"LookupAttribute_wxtziei": {
					"modelConfig": {
						"path": "PDS.UsrColumn4"
					}
				},
				"LookupAttribute_rnkbtdk": {
					"modelConfig": {
						"path": "PDS.UsrColumn5"
					}
				},
				"LookupAttribute_xbsptt7": {
					"modelConfig": {
						"path": "PDS.UsrColumn6"
					}
				},
				"LookupAttribute_m94u661": {
					"modelConfig": {
						"path": "PDS.UsrColumn7"
					}
				},
				"LookupAttribute_osg47f4": {
					"modelConfig": {
						"path": "PDS.UsrColumn8"
					}
				},
				"StringAttribute_lrded17": {
					"modelConfig": {
						"path": "PDS.UsrColumn9"
					}
				},
				"StringAttribute_1q00zlz": {
					"modelConfig": {
						"path": "PDS.UsrColumn10"
					}
				},
				"StringAttribute_10qsqvd": {
					"modelConfig": {
						"path": "PDS.UsrColumn11"
					}
				},
				"StringAttribute_h4psnas": {
					"modelConfig": {
						"path": "PDS.UsrColumn12"
					}
				},
				"StringAttribute_drngjo1": {
					"modelConfig": {
						"path": "PDS.UsrColumn13"
					}
				},
				"StringAttribute_npivivz": {
					"modelConfig": {
						"path": "PDS.UsrColumn14"
					}
				},
				"DataGrid_wmtgy8i": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_wmtgy8iDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_wmtgy8iDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_wmtgy8iDS.UsrName"
								}
							},
							"DataGrid_wmtgy8iDS_Id": {
								"modelConfig": {
									"path": "DataGrid_wmtgy8iDS.Id"
								}
							}
						}
					}
				},
				"DataGrid_faofj7z": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_faofj7zDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_faofj7zDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_faofj7zDS.UsrName"
								}
							},
							"DataGrid_faofj7zDS_Id": {
								"modelConfig": {
									"path": "DataGrid_faofj7zDS.Id"
								}
							}
						}
					}
				},
				"DataGrid_vbvjxh0": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_vbvjxh0DS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_vbvjxh0DS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_vbvjxh0DS.UsrName"
								}
							},
							"DataGrid_vbvjxh0DS_Id": {
								"modelConfig": {
									"path": "DataGrid_vbvjxh0DS.Id"
								}
							}
						}
					}
				},
				"LookupAttribute_yi4wx5s": {
					"modelConfig": {
						"path": "PDS.UsrColumn15"
					}
				},
				"StringAttribute_9wy5bo1": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"FileList_hdkqwlm": {
					"isCollection": true,
					"modelConfig": {
						"path": "FileList_hdkqwlmDS",
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
							"FileList_hdkqwlmDS_Name": {
								"modelConfig": {
									"path": "FileList_hdkqwlmDS.Name"
								}
							},
							"FileList_hdkqwlmDS_CreatedOn": {
								"modelConfig": {
									"path": "FileList_hdkqwlmDS.CreatedOn"
								}
							},
							"FileList_hdkqwlmDS_CreatedBy": {
								"modelConfig": {
									"path": "FileList_hdkqwlmDS.CreatedBy"
								}
							},
							"FileList_hdkqwlmDS_Size": {
								"modelConfig": {
									"path": "FileList_hdkqwlmDS.Size"
								}
							},
							"FileList_hdkqwlmDS_Id": {
								"modelConfig": {
									"path": "FileList_hdkqwlmDS.Id"
								}
							}
						}
					}
				},
				"DateTimeAttribute_dzkwm4y": {
					"modelConfig": {
						"path": "PDS.UsrColumn16"
					}
				},
				"NumberAttribute_1a3g157": {
					"modelConfig": {
						"path": "PDS.UsrColumn17"
					}
				},
				"LookupAttribute_sp1xhv9": {
					"modelConfig": {
						"path": "PDS.UsrColumn18"
					}
				},
				"LookupAttribute_2p1fxqx": {
					"modelConfig": {
						"path": "PDS.UsrColumn19"
					}
				},
				"DataGrid_a0nnnf1": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_a0nnnf1DS",
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "DataGrid_a0nnnf1_PredefinedFilter"
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_a0nnnf1DS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_a0nnnf1DS.UsrName"
								}
							},
							"DataGrid_a0nnnf1DS_Id": {
								"modelConfig": {
									"path": "DataGrid_a0nnnf1DS.Id"
								}
							}
						}
					}
				},
				"DataGrid_a0nnnf1_PredefinedFilter": {
					"value": null
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrApp_ulpifig"
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
				"DataGrid_wmtgy8iDS": {
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
				"DataGrid_faofj7zDS": {
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
				"DataGrid_vbvjxh0DS": {
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
				},
				"FileList_hdkqwlmDS": {
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
				"DataGrid_a0nnnf1DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrEntity_b804796",
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
				"DataGrid_wmtgy8iDS": [
					{
						"attributePath": "UsrCandidate",
						"relationPath": "PDS.Id"
					}
				],
				"DataGrid_faofj7zDS": [
					{
						"attributePath": "UsrCandidate",
						"relationPath": "PDS.UsrColumn15"
					}
				],
				"DataGrid_vbvjxh0DS": [
					{
						"attributePath": "UsrCandidate",
						"relationPath": "PDS.UsrColumn15"
					}
				],
				"DataGrid_a0nnnf1DS": [
					{
						"attributePath": "UsrCandidate",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});