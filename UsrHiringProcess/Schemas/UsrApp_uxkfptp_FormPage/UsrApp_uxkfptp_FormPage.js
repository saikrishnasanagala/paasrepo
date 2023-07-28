define("UsrApp_uxkfptp_FormPage", /**SCHEMA_DEPS*/["ActionDashboardComponent"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "remove",
				"name": "Tabs"
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab"
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "remove",
				"name": "CardToggleTabPanel"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "ImageInput_xyu0jyk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ImageInput",
					"labelPosition": "auto",
					"value": "$ImageLinkAttribute_52e8xa2",
					"size": "large",
					"borderRadius": "medium",
					"positioning": "cover"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_khyl1pw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_wsr3x3z",
					"labelPosition": "auto",
					"control": "$LookupAttribute_wsr3x3z",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_9cp31tz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_o6vndd8",
					"labelPosition": "auto",
					"control": "$LookupAttribute_o6vndd8",
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
				"name": "addRecord_483x5cp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_483x5cp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9cp31tz",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_b025a8c",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_4s05zcq",
					"labelPosition": "auto",
					"control": "$LookupAttribute_4s05zcq",
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
				"name": "addRecord_iw6w0dk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_iw6w0dk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_b025a8c",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_geq2y6t",
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
				"name": "WebInput_aptydyi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.WebInput",
					"label": "$Resources.Strings.StringAttribute_xh111mb",
					"labelPosition": "auto",
					"control": "$StringAttribute_xh111mb"
				},
				"parentName": "GridContainer_geq2y6t",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_zyg6uiz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.StringAttribute_m3raiqu",
					"labelPosition": "auto",
					"control": "$StringAttribute_m3raiqu"
				},
				"parentName": "GridContainer_geq2y6t",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PhoneInput_38029gf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.StringAttribute_ls8699o",
					"labelPosition": "auto",
					"control": "$StringAttribute_ls8699o"
				},
				"parentName": "GridContainer_geq2y6t",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_67dc8wx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_3da60x4",
					"labelPosition": "auto",
					"control": "$LookupAttribute_3da60x4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_geq2y6t",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_upusnrh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_upusnrh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_67dc8wx",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabPanel_l25n9wr",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto"
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_fsxc0i5",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_fsxc0i5_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "TabPanel_l25n9wr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_t4fq3jn",
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
				"parentName": "TabContainer_fsxc0i5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_pxne4c1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_q0a8uy3",
					"labelPosition": "auto",
					"control": "$StringAttribute_q0a8uy3",
					"multiline": false
				},
				"parentName": "GridContainer_t4fq3jn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_p52shw2",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_4fomqep",
					"labelPosition": "auto",
					"control": "$NumberAttribute_4fomqep"
				},
				"parentName": "GridContainer_t4fq3jn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_fpp1xwh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_42js0vd",
					"labelPosition": "auto",
					"control": "$StringAttribute_42js0vd",
					"multiline": false
				},
				"parentName": "GridContainer_t4fq3jn",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_fs4vtg9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_fs4vtg9_title)#",
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
				"parentName": "GridContainer_t4fq3jn",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_yvq4pyy",
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
				"parentName": "ExpansionPanel_fs4vtg9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d4764i7",
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
				"parentName": "GridContainer_yvq4pyy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_weckz3q",
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
				"parentName": "ExpansionPanel_fs4vtg9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_enzin05",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_cxxypdc",
					"labelPosition": "auto",
					"control": "$NumberAttribute_cxxypdc"
				},
				"parentName": "GridContainer_weckz3q",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_h97cy1k",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_sgcsz99",
					"labelPosition": "auto",
					"control": "$LookupAttribute_sgcsz99",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_weckz3q",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_g02nbjd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g02nbjd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_h97cy1k",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_paxb62y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_0qw1cnp",
					"labelPosition": "auto",
					"control": "$LookupAttribute_0qw1cnp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_weckz3q",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_98sznq6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_98sznq6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_paxb62y",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_25vcu88",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_25vcu88_title)#",
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
				"parentName": "GridContainer_t4fq3jn",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_p57buw4",
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
				"parentName": "ExpansionPanel_25vcu88",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ilwzuk6",
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
				"parentName": "GridContainer_p57buw4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_4da7wgd",
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
				"parentName": "ExpansionPanel_25vcu88",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_hojnpyl",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_hojnpyl_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "home-tab-icon"
				},
				"parentName": "TabPanel_l25n9wr",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_otuoe3h",
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
				"parentName": "TabContainer_hojnpyl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_v2hg8ur",
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
					"title": "#ResourceString(ExpansionPanel_v2hg8ur_title)#",
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
				"parentName": "GridContainer_otuoe3h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_hwpy83u",
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
				"parentName": "ExpansionPanel_v2hg8ur",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_qa361yj",
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
				"parentName": "GridContainer_hwpy83u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_php8iw8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_php8iw8_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrEntity_1c94d72",
							"defaultValues": [
								{
									"attributeName": "UsrColumn2",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_qa361yj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_corq0h5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_corq0h5_caption)#",
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
				"parentName": "FlexContainer_qa361yj",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_jgpci7u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_jgpci7u_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_qa361yj",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ybblj6a",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ybblj6a_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest"
					}
				},
				"parentName": "GridDetailSettingsBtn_jgpci7u",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_9gisior",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_9gisior_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest"
					}
				},
				"parentName": "GridDetailSettingsBtn_jgpci7u",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_e88h6iu",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_e88h6iu_placeholder)#",
					"iconOnly": true
				},
				"parentName": "FlexContainer_qa361yj",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_k73ldhf",
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
				"parentName": "ExpansionPanel_v2hg8ur",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_9bpgqur",
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
					"items": "$DataGrid_9bpgqur",
					"primaryColumnName": "DataGrid_9bpgqurDS_Id",
					"columns": [
						{
							"id": "26e33603-a36a-71b9-d704-802a2a72bee7",
							"code": "DataGrid_9bpgqurDS_UsrName",
							"caption": "#ResourceString(DataGrid_9bpgqurDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_k73ldhf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_akznqj1",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_akznqj1_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "flowchart-tab-icon"
				},
				"parentName": "TabPanel_l25n9wr",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_1su0k32",
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
				"parentName": "TabContainer_akznqj1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_a9k49h4",
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
					"title": "#ResourceString(ExpansionPanel_a9k49h4_title)#",
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
				"parentName": "GridContainer_1su0k32",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_g9ufrwz",
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
				"parentName": "ExpansionPanel_a9k49h4",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gj77ash",
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
				"parentName": "GridContainer_g9ufrwz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_umzgt6l",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_umzgt6l_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrEntity_85e7f4e",
							"defaultValues": [
								{
									"attributeName": "UsrColumn3",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_gj77ash",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_6527i8t",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_6527i8t_caption)#",
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
				"parentName": "FlexContainer_gj77ash",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_5awks9s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_5awks9s_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_gj77ash",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ltq9p2r",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ltq9p2r_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest"
					}
				},
				"parentName": "GridDetailSettingsBtn_5awks9s",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_40ogzty",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_40ogzty_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest"
					}
				},
				"parentName": "GridDetailSettingsBtn_5awks9s",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_mu0aacj",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_mu0aacj_placeholder)#",
					"iconOnly": true
				},
				"parentName": "FlexContainer_gj77ash",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_t6no08f",
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
				"parentName": "ExpansionPanel_a9k49h4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ub4benm",
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
					"items": "$DataGrid_ub4benm",
					"primaryColumnName": "DataGrid_ub4benmDS_Id",
					"columns": [
						{
							"id": "6dadd561-b722-4ccc-d595-69d99a186696",
							"code": "DataGrid_ub4benmDS_UsrName",
							"caption": "#ResourceString(DataGrid_ub4benmDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_t6no08f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_xrjsa15",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_xrjsa15_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_l25n9wr",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ls55lqb",
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
				"parentName": "TabContainer_xrjsa15",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_v8kskup",
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
					"title": "#ResourceString(ExpansionPanel_v8kskup_title)#",
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
				"parentName": "GridContainer_ls55lqb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_xkrp9cl",
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
				"parentName": "ExpansionPanel_v8kskup",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ygx08y2",
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
				"parentName": "GridContainer_xkrp9cl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_bzxtse2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_bzxtse2_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrApp_dqzzyqn",
							"defaultValues": [
								{
									"attributeName": "UsrAccount",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ygx08y2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_qjrwx6s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_qjrwx6s_caption)#",
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
				"parentName": "FlexContainer_ygx08y2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_5lt6d7o",
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
				"parentName": "ExpansionPanel_v8kskup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_c1k0ydu",
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
					"items": "$DataGrid_c1k0ydu",
					"primaryColumnName": "DataGrid_c1k0yduDS_Id",
					"columns": [
						{
							"id": "0967d234-65c8-22d5-633b-3a3c2113a071",
							"code": "DataGrid_c1k0yduDS_UsrName",
							"caption": "#ResourceString(DataGrid_c1k0yduDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_5lt6d7o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_v3tlu6p",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_v3tlu6p_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_l25n9wr",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_rkmt5ca",
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
				"parentName": "TabContainer_v3tlu6p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_nyhy162",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_nyhy162_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_l25n9wr",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_g7o2jdu",
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
				"parentName": "TabContainer_nyhy162",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_dvgqmfz",
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
					"title": "#ResourceString(ExpansionPanel_dvgqmfz_title)#",
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
				"parentName": "GridContainer_g7o2jdu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_av853dv",
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
				"parentName": "ExpansionPanel_dvgqmfz",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_1z2zy93",
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
				"parentName": "GridContainer_av853dv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_f64kgby",
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
				"parentName": "ExpansionPanel_dvgqmfz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_g716t6t",
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
					"items": "$DataGrid_g716t6t",
					"primaryColumnName": "DataGrid_g716t6tDS_Id",
					"columns": [
						{
							"id": "c1f6b14e-14ae-31e3-2fcb-017163b05cb4",
							"code": "DataGrid_g716t6tDS_UsrName",
							"caption": "#ResourceString(DataGrid_g716t6tDS_UsrName)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_f64kgby",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_nwhtqs4",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_nwhtqs4_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_l25n9wr",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_x96u7sq",
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
				"parentName": "TabContainer_nwhtqs4",
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
				"DataGrid_lno4dg2": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_lno4dg2DS",
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "DataGrid_lno4dg2_PredefinedFilter"
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_lno4dg2DS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_lno4dg2DS.UsrName"
								}
							},
							"DataGrid_lno4dg2DS_Id": {
								"modelConfig": {
									"path": "DataGrid_lno4dg2DS.Id"
								}
							}
						}
					}
				},
				"DataGrid_lno4dg2_PredefinedFilter": {
					"value": {
						"items": {
							"58c1e5f2-e9b4-48e8-a80c-7108d080e263": {
								"filterType": 4,
								"comparisonType": 3,
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "UsrAccount"
								},
								"isAggregative": false,
								"dataValueType": 10,
								"referenceSchemaName": "UsrApp_uxkfptp",
								"rightExpressions": [
									{
										"expressionType": 2,
										"parameter": {
											"dataValueType": 10,
											"value": {
												"UsrName": "TCS",
												"Id": "de3610b4-1f11-4009-8a81-3566506c0233",
												"value": "de3610b4-1f11-4009-8a81-3566506c0233",
												"displayValue": "TCS"
											}
										}
									}
								]
							}
						},
						"logicalOperation": 0,
						"isEnabled": true,
						"filterType": 6,
						"rootSchemaName": "UsrApp_dqzzyqn"
					}
				},
				"LookupAttribute_o6vndd8": {
					"modelConfig": {
						"path": "PDS.UsrColumn2"
					}
				},
				"LookupAttribute_wsr3x3z": {
					"modelConfig": {
						"path": "PDS.UsrType"
					}
				},
				"StringAttribute_xh111mb": {
					"modelConfig": {
						"path": "PDS.UsrColumn4"
					}
				},
				"StringAttribute_ls8699o": {
					"modelConfig": {
						"path": "PDS.UsrColumn5"
					}
				},
				"LookupAttribute_3da60x4": {
					"modelConfig": {
						"path": "PDS.UsrColumn6"
					}
				},
				"ImageLinkAttribute_52e8xa2": {
					"modelConfig": {
						"path": "PDS.UsrColumn7"
					}
				},
				"StringAttribute_42js0vd": {
					"modelConfig": {
						"path": "PDS.UsrColumn8"
					}
				},
				"NumberAttribute_4fomqep": {
					"modelConfig": {
						"path": "PDS.UsrColumn9"
					}
				},
				"NumberAttribute_cxxypdc": {
					"modelConfig": {
						"path": "PDS.UsrColumn10"
					}
				},
				"LookupAttribute_sgcsz99": {
					"modelConfig": {
						"path": "PDS.UsrColumn11"
					}
				},
				"LookupAttribute_0qw1cnp": {
					"modelConfig": {
						"path": "PDS.UsrColumn12"
					}
				},
				"DataGrid_ub4benm": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_ub4benmDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_ub4benmDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_ub4benmDS.UsrName"
								}
							},
							"DataGrid_ub4benmDS_Id": {
								"modelConfig": {
									"path": "DataGrid_ub4benmDS.Id"
								}
							}
						}
					}
				},
				"DataGrid_9bpgqur": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_9bpgqurDS",
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "DataGrid_9bpgqur_PredefinedFilter"
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_9bpgqurDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_9bpgqurDS.UsrName"
								}
							},
							"DataGrid_9bpgqurDS_Id": {
								"modelConfig": {
									"path": "DataGrid_9bpgqurDS.Id"
								}
							}
						}
					}
				},
				"DataGrid_9bpgqur_PredefinedFilter": {
					"value": null
				},
				"DataGrid_g716t6t": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_g716t6tDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_g716t6tDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_g716t6tDS.UsrName"
								}
							},
							"DataGrid_g716t6tDS_Id": {
								"modelConfig": {
									"path": "DataGrid_g716t6tDS.Id"
								}
							}
						}
					}
				},
				"DataGrid_c1k0ydu": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_c1k0yduDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_c1k0yduDS_UsrName": {
								"modelConfig": {
									"path": "DataGrid_c1k0yduDS.UsrName"
								}
							},
							"DataGrid_c1k0yduDS_Id": {
								"modelConfig": {
									"path": "DataGrid_c1k0yduDS.Id"
								}
							}
						}
					}
				},
				"LookupAttribute_4s05zcq": {
					"modelConfig": {
						"path": "PDS.UsrColumn13"
					}
				},
				"StringAttribute_q0a8uy3": {
					"modelConfig": {
						"path": "PDS.UsrColumn14"
					}
				},
				"StringAttribute_m3raiqu": {
					"modelConfig": {
						"path": "PDS.UsrColumn15"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrApp_uxkfptp"
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
				"DataGrid_lno4dg2DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrApp_dqzzyqn",
						"attributes": {
							"UsrName": {
								"path": "UsrName"
							}
						}
					}
				},
				"DataGrid_ub4benmDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrEntity_85e7f4e",
						"attributes": {
							"UsrName": {
								"path": "UsrName"
							}
						}
					}
				},
				"DataGrid_9bpgqurDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrEntity_1c94d72",
						"attributes": {
							"UsrName": {
								"path": "UsrName"
							}
						}
					}
				},
				"DataGrid_g716t6tDS": {
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
				"DataGrid_c1k0yduDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrApp_dqzzyqn",
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
				"DataGrid_ub4benmDS": [
					{
						"attributePath": "UsrColumn3",
						"relationPath": "PDS.Id"
					}
				],
				"DataGrid_9bpgqurDS": [
					{
						"attributePath": "UsrColumn2",
						"relationPath": "PDS.Id"
					}
				],
				"DataGrid_g716t6tDS": [
					{
						"attributePath": "UsrAccount",
						"relationPath": "PDS.Id"
					}
				],
				"DataGrid_c1k0yduDS": [
					{
						"attributePath": "UsrAccount",
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