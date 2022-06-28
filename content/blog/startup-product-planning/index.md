---
title: Quarterly Product Planning for Startups
date: "2021-10-03T00:00:00.000Z"
description: "How to productively plan your short-term product initiatives with your a small team."
---

# What are we going to build the next quarter?

When you're small and agile, it's very easy to go without planning past 1-2 sprints. Quarterly product planning is important, however, as it gives the team a chance to review previous outcomes, digest learnings, and align efforts moving forward. As importantly, it also allows you to refine your organization's roadmap for communication to stakeholders, both internally and externally.

I want to share a methodology we've used at Linus for this.

1. Preparation
2. Review Company Vision, Mission, and Quarterly Goals
3. Define Customer, Business, and Technical Needs
4. Align Needs with Product Backlog

**This methodology works when a team is small (> ~10, but YMMV), and where team alignment is more important than a rigorous business review.**

_Note: Product planning in a small startup is more art than science. Use this as a reference, but ultimately you'll need to adjust for the specifics of your team._

# Preparation

_Length: 60 Mins_

Spend 60 minutes getting organized. Some tips:

- Total time spent should be 4 hours maximum. Block off calendar time in 1 or 2 blocks for all attendees well in advance. Stick to the calendar times as your time box.
- The session can be run virtually or in person. Take notes in a shared document, using a tool like Google Docs or Notion.
- Ideally lead by the head of Product, or similar. Someone who has a full view of the organization, maintains the agenda, and easily faciliates discussion amongst all attendees.
- Attendees should be leadership from Product, Engineering at minimum (& Sales if you're B2B). Marketing, Support, and Operations leadership if they can be productive and would like to participate (that is, if you even have them at this stage of your company).
- Your product backlog should be accessible to all attendees. Groomed or ungroomed, so long as work items can be properly discussed and debated.
- Relevant data regarding customer feedback and product metrics in hand.

# Review Company Mission, Vision, and Quarterly Goals

_Length: 60 Mins_

**Mission and Vision**

Come with your company's mission and vision statements prepared, and review as a team. We start here because we should always be able to map our product efforts, even at the most granular level, back to our Company Mission and Vision. You should have these drafted already, but if not, spend time drafting them as a team. Don't get bogged down in this exercise though. They don't have to be perfect, they just need to move the team along. Perfection can come later.

(Mission and Vision are used as tools to help ensure that the company is going in the direction everyone thinks it is, and helps establish how you will get there as a team. If you just have one and not the other, that's fine as they're often interchangable at this stage of a company.)

Ask yourselves -- Do these still make sense and are we all still aligned that this is the direction we are going? If so, great. If not, which may often be the case with an early stage company, spend a few minutes and draft something new. Again, don't get bogged down, but get to high level agreement statements that align with the company's direction.

**Quarterly Goals**

How do we know we're moving the needle?

OKRs are a great framework here. Early stage, where you have mainly one product that everyone works on, it's best to have 1 company objective, and up to 3 company KPIs. You could possibly have 2 objectives, but make sure they are not conflicting or competing for resources.

Some examples:

- Objective: Expand product distribution channels into paid advertising.
  - KPI: Achieve 100% growth in Daily Active Users, from 1000 to 2000, with 50% resulting from Google Paid Ads, by the end of Q1.
- Objective: Achieve revenue targets
  - KPI: Increase Annual Recurring Revenue by 30%, from $100 million to $130 million by the end of Q1.
- Objective: Expand our business in new markets.
  - KPI: Expand operations into LATAM with Argentina product launch, and hire 2 local support staff by the end of Q1.

KPIs (Goals) should be specific, measurable, actionable, relevant, and time-based (SMART). You should know very clearly whether or not you have achieved them when it comes time for review. They should be stretch goals, ones that will be hard to achieve, but not impossible.

Ideally, you're spending the bulk of this 30 minutes on Objectives and KPIs, and only a minor amount of time reviewing the Mission and Vision.

# Define Customer, Business, and Technical Needs

_Length: 60 Mins_

**Customer Needs**

What are your customers asking for? A few sources of customer needs information for B2C products (for efficient use of time, review sources and aggregate needs ahead of your planning session):

- Customer support chat. If your product has chat support, there's a wealth of information that lives in the chat logs. Have your support team create and assign tags to chats, so that customer feedback can be easily identified and consumed.
- Customer research through interviews and prototype reviews. Your designer (or team) should have this research documented.
- Screen recordings using a tool like HotJar. Watching how customers use your product can be very useful in understanding where your product is lacking.
- Flow and Funnel analysis using a tool like Mixpanel. Most useful when combined with customer interviews focused on drop-off points.

For B2B products, the bulk of your customer need information will come from your sales team.

If you don't have a system set up for passively collecting user feedback from your whole team, I'd suggest implementing at least one of the following, to make things easier for next time:

- A #customer-insights channel in your team's Slack as a single source repository of sharing of customer needs.
- A tool like HelloNext, which allows customers to create and upvote on public-facing feature requests.
- A shared CRM that allows multiple team members to add, update, and read notes about customers.

**Business Needs**

What is most crticially impacting your business at this point in time? What could impact your business over the next 3, 6, and 12 months? Does anything need to be addressed?

For instance, is your product struggling to achieve the growth it needs to hit metrics for the next fundraising round? Do you have a service provider that is a significant cost to your business, impacting your bottom-line? Is there a regulatory concern for your business that needs to be addressed by the product team immediately?

Early on, these are likely to be major, systemic issues that can make or break your business. It's important, however, to not let these completely overshadow the needs customers and your technical team.

**Technical Needs**

This is mainly related to major architectural work. Bug fixes and day-to-day technical issues should be constantly worked into the teams priorities as needed and are not up for discussion here.

--

**At this point, you should have a significant list of options that your team can address over the next quarter.**

# Align Needs with Product Backlog

_Length: 60 Mins_

Next comes the fun part. The needs you've identified should be prioritized against your existing product backlog. Ruthless prioritization is encouraged here.

Meaningful factors to consider during prioritization:

- KPIs impacted and size of impact
- Resources required (FE, BE, Design)
- Estimated difficulty (Time)

Do this in whatever tool you use to manage your backlog. We use JIRA for day-to-day project management, but we use Notion to plan and prioritize higher-level backlog items since JIRA tends to be a lot more granular (and sometimes distracting) than needed.

Create new backlog items for anything that does not exist. Don't worry about filling out the spec in detail (that comes later), but make sure that a simple description is written that participants can understand and agree on scope.

Be aware of the resources required for each item. For instance, if your backlog at this point is very FE heavy, you may be able to plan to squeeze in some extra BE items that you otherwise would have not thought you could.

Assign priorities based on a numbered scale that works for you. We use P1-P5, with P1 being that which we are doing immediately, P2 being that which we plan to do next, P3 being that which we hope to get to this quarter, and P4-P5 being those items which will likely not get done this quarter.

---

**At the end of this exercise, you will have a prioritized list of high-level product backlog items. If you've estimated the time associated with each item, you should be able to easily see what is going to fit in the quarter. This list can then be shared with whatever stakeholders you deem necessary :).**

--

Have you tried this method? What do you think? Comments and suggestions for improvement are always welcome.
