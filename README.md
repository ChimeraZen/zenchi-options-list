# ZenChi Apps
  
**Description**:  ZenChi Options List is a simple dropdown list with a vertical ellipsis HTML entity for an icon

**Version**:      [0.1.0](#v010)  
**Author**:       Elijah Liedtke (Chimera.Zen)  
**Email**:        [chimera.zen@gmail.com](mailto:chimera.zen@gmail.com)  
**Link**:         https://github.com/ChimeraZen/zenchi-options-list

**Copyright**:    Copyright (c) 2018, Elijah Liedtke  
**License**:      https://www.gnu.org/licenses/gpl-3.0.en.html

## Table of Contents
1. [Instructions](#instructions)
    1. [Installation](#installation)
    2. [Updating](#updating)
    3. [Uninstall](#uninstall)
2. [Components](#components)
    1. [OptionsList](#optionslist)
3. [ChangeLog](#changelog)

---

## Instructions
The following has been provided to assist in installing, updating or removing the ZenChi (pronounced: *zen-Kai*) Apps. Questions, comments, suggestions and concerns are welcome and can be sent to [chimera.zen@gmail.com](mailto:chimera.zen@gmail.com).

I hope you enjoy this app!

&nbsp;
### Installation
1. Navigate to your app directory and install the ZenChi Options List package using:
```
npm i zenchi-options-list
```
2. Once installed, ZenChi components can be imported using this syntax and replacing `component_name` with the required component:
```
import { OptionsList } from 'zenchi-options-list'
```
&nbsp;
### Updating
1. Navigate to your app directory and enter:
```
npm update zenchi-options-list
```
&nbsp;
### Uninstall
1. Navigate to your app directory and enter:
```
npm uninstall zenchi-options-list
```

&nbsp;
## Components

### OptionsList
The ZenChi Options List component is a simple ReactJS droplist .

This component can be initialized using `import { OptionsList } from 'zenchi-options-list'`

```
<OptionsList>
  <li>Option 1</li>
  <li>Option 2</li>
</OptionsList>
```


### Parameters

Name        |Type     |Default|Syntax                                      |Description
------------|---------|-------|--------------------------------------------|-------------------------------
id          |string   |       |                                            |Passed as a prop, an id can be attached to the OptionsList
className   |string   |       |                                            |Passed as a prop, additional classes can be attached to the OptionsList


&nbsp;
## ChangeLog
### v0.1.0
* Initial commit
* Created dropdown feature
