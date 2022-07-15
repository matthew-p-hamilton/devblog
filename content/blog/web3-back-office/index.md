---
title: (PC) Back Office Software for Web3
date: "2022-07-12T00:00:00.000Z"
description: "Quick thoughts on how to improve web3 community back office capabilities"
---

_As an exercise in organizing my thoughts on new opportunities in the crypto space, from time to time I’m going to start publishing pieces in a new series, called "Product Concepts”, or "PC" for short. These are quick hitters (~2 hours) that outline an interesting problem space, potential solution(s), and opportunities for monetization. Hopefully this series will spark some ideas for a budding builder._

<hr>

Web3 communities have needs related to back office processes, just like any other traditional organization — Accounting, HR, Payroll, and Tax are organizational functions that are still required. Currently, web3 communities have a lot of these processes managed using custom-built tools, using a smattering of ill-designed tools, or using nothing at all. It would seem that there may be room for a solution that 1) helps bootstrap some of these processes for communities that often times do not have these competencies from the start, freeing up time from the team to focus on building value-added products, and 2) enables transparent visibility into the health and performance of the communities operations, enabling critical reporting capabilities for internal and external stakeholders.

_(Note: I’m equating “Web3 community” with “DAO” here. Don’t come at me.)_

# Current State

An example of how [DXdao](https://dxdao.eth.link/) — a well functioning DAO that tries to perform all organizational actions on chain — manages their back office processes today:

- **Accounting**: There’s no basic accounting information that I can find regarding the DAO’s financial performance like an income statement, balance sheet, P&L, or cash flow statement. As far as I can tell, [Etherscan’s Token Holdings](https://etherscan.io/tokenholdings?a=0x519b70055af55a007110b4ff99b0ea33071c720a) page for the DAO is the only place I can get a real time view into the DAO’s treasury positions. It doesn’t provide much of an understanding the DAO’s financial performance, however.
- **HR**: DXdao has in their docs a [Contributor Hub](https://dxdocs.eth.limo/docs/ContributorHub/) section. This is by far one of the better HR resources I’ve seen with web3 communities. It outlines positions that the DAO is in need of, how to onboard and engage with the DAO, and general HR stuff like details about communications and standards of conduct.
- **Payroll**: In order to get paid, one has to submit a [Contributor Proposal](https://dxdocs.eth.limo/docs/ContributorHub/contributor-proposals/) on Gnosis Chain, which is voted on by the DAO members in [Alchemy](https://alchemy.daostack.io/dao/0x519b70055af55a007110b4ff99b0ea33071c720a). All payments
- **Tax**: It can be assumed that the DAO itself does not pay tax to any state. Contributors bear the burden of tax themselves, as if they were contractors. Many contributors choose to set up an entity like an LLC to engage with the DAO, which helps to minimize their tax burden, among other things. DXdao offers [stipend for entity formation](https://daotalk.org/t/dxdao-entity-formation-and-maintenance-contributor-stipend/3852) for its contributors.

DXdao has its shit together in regards to back office operations, but they’ve had 3 years to get here. They’ve put significant effort into operationalizing their back office on-chain as much as possible. That being said, even DXdao could benefit itself, along with existing and prospective DXD holders, with a bit more transparent information about the organization’s back office in a centralized location.

Other times we have a group of contributor pseudo-anons who leave us to decipher how the DAO is being run via Etherscan transactions.

_Update: DXdao Governance Lead, Chris Powers, has linked me to a recent expense report he published in the DAO forum - https://daotalk.org/t/dxdao-expenses-update-june-2022/4285. This is an awesome breakdown on how the DAO is burning through its capital, but it's clearly a manual process that takes a ton of work. Can this be automated?_

# Potential Future State

Imagine a tab on a community’s home page labelled “Health” that’s accessible to anyone. When the user clicks on that tab, they’re taken to a hosted page, or a page within the dApp itself, that displays information about how the community’s back office is running, powered by some third-party service. The user could get information about:

- **Accounting:** Automatically generated statements related to income, balance sheet, P&L, cash flow, treasury positions
- **HR**: Info on open community positions and active contributors, along with information on contributor details like their on-chain identities, contributions and compensation details
- **Payroll**: The organization’s payroll transaction history, along with projections of upcoming payments to contributors
- **Governance**: Treasury related proposal, e.g. the ability to view contributor payroll proposals and their voting status / results. This would be a separate type of governance from the on-chain proposals related to product.

To help the community bootstrap this reporting, the service could have some mechanism to ingest on-chain treasury data, to produce the accounting statements, transaction history, and visualizations representing the community health. It could also have open source, deployable turn-key contracts to enable immediate on-chain contributor payroll powered by community voting.

_(If I have time, I may add some low fidelity mocks here later.)_

# Opportunities to Monetize

The most straightforward way would seem to be to offer the tech for free and combine it with value-added services that can be leveraged at extra cost. Services like helping contributors get paid in their local currency to their local bank account, pass-through entity set up to engage with the DAO, and tax consulting. A more exciting way, and inline with the communities the product would serve, to monetize would be through a token-based model. At a glance, I'm not quite sure what this would look like though.

Think this is interesting, you’re working on this, or you have comments? Send me some feedback on Twitter or via email.
