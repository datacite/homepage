---
title: Service Provider Program
layout: service-requirements
---

# What is a DataCite Service Provider?

A DataCite Registered Service Provider provides software that integrates with a DataCite API in order to allow DataCite Members to register DOIs using each Member’s own DataCite API credentials.

Registered Service Providers meet requirements and follow best practices to ensure that their integrations register DOIs correctly and support creation of high-quality metadata.

Organizations that provide a CRIS or a repository platform, or that assist other organizations in developing custom DataCite integrations, are examples of potential Service Providers.

Registered Service Providers are listed in our [Service Provider Listing](/service-providers.html).

# Goals of the program

- Provide current and prospective DataCite Members with information about Service Providers they can work with to easily implement DOI registration
- Provide guidance and best practices to Services Providers
- Enable easier communication with Service Providers
- Provide better support to both Service Providers and Members

# Requirements for Registered Service Providers

## DataCite Registered Service Providers will:

1. Integrate the Datacite [REST API](https://support.datacite.org/docs/api) or [MDS API](https://support.datacite.org/docs/mds-api-guide) into one or more software products which they provide to their customers, in order to allow DataCite Members to register DOIs using each Member's own DataCite API credentials. Prospective Service Providers that do not yet have an integration should use the REST API
2. Demonstrate that they have registered real, findable DOIs in the DataCite production environment through their integration. Findable DOIs are registered in the global handle system and indexed in [DataCite Search](https://search.datacite.org/). For more information about registering findable DOIs, see [Rest API Guide: Create a Findable DOI](https://support.datacite.org/docs/api-create-dois#create-a-findable-doi) or [MDS API Guide: DOI States](https://support.datacite.org/docs/mds-api-guide#doi-states).
*Note: Registering DOIs in the production environment requires DataCite member credentials. Service Providers should collaborate with a customer who is an existing DataCite member to identify findable DOI examples. If the Service Provider does not yet have any DataCite members as customers, provisional registration based on a demonstration using the [DataCite test environment](https://doi.test.datacite.org) is possible.  See our [Testing Guide](https://support.datacite.org/docs/testing-guide) for more information about the test environment.*
3. Support submission of DOI metadata that is compliant with DataCite Metadata Schema v4 or higher. See [schema.datacite.org](https://schema.datacite.org/) for schema information.
4. In cases where customers must share their DataCite credentials with you, provide a secure means for them to do so (ex: encrypted email, password manager, etc). Plain text over email is not secure.
5. Do their best to adhere to the [DataCite Best Practices for Service Providers](https://datacite.org/documents/DataCite_BestPractices_ServiceProviders_v1.pdf)
6. Display the DataCite Service Provider badge on their website (badge image file will be provided upon successful registration).
7. Provide first-line support to their users, escalating to DataCite support (support@datacite.org) if necessary
8. Provide a designated contact email that DataCite staff can use to request assistance with troubleshooting member support issues and to inform the Service Provider about updates to DataCite services. This can be a group email address, e.g. info@service.org
9. Provide DataCite staff with basic information about their service(s) for inclusion in the [Service Provider Listing](https://datacite.org/service-providers.html).

## DataCite Service Providers are encouraged to:

- Advise customers to [add repository software information to the Settings section of their DataCite repository account](https://support.datacite.org/docs/update-repository-settings#software).
- Implement [Make Data Count](https://makedatacount.org/) for gathering and submitting dataset usage metrics compliant with the [COUNTER Code of Practice for Research Data](https://www.projectcounter.org/code-of-practice-rd-sections/foreword/).
- Include the [DataCite Data Metrics Badge](https://support.datacite.org/docs/displaying-usage-and-citations-in-your-repository) in their implementations.
- Advise customers who operate data repositories to submit their repositories to [re3data](https://www.re3data.org/), the Registry of Research Data Repositories, and [add their re3data record to the Settings section of their DataCite repository account](https://support.datacite.org/docs/update-repository-settings#re3data-record). Request addition to re3data using the form at [https://www.re3data.org/suggest](https://www.re3data.org/suggest).

# Documentation for Service Providers

- DataCite Service Providers are expected to [DataCite Best Practices for Service Providers](/documents/DataCite_BestPractices_ServiceProviders_v1.pdf).
- Additional documentation can be found on the  [DataCite support site](https://support.datacite.org).

# Benefits of Service Provider Registration

Registered Service Providers are:

- Listed in the [DataCite Service Provider Listing](https://datacite.org/service-providers.html)
- Included in the controlled list of Service Providers that users can select in [Fabrica](https://doi.datacite.org/) when updating their repository metadata.
- Provided with a registered Service Provider badge to display on their website.
- Invited to join a mailing list where they will receive regular updates from DataCite.
- Invited to join quarterly quarterly calls where Service Providers can learn about and provide input on upcoming DataCite features/changes and discuss best practices with other Service Providers.

# Become a Registered Service Provider
1. Review the [DataCite Best Practices for Service Providers](https://datacite.org/documents/DataCite_BestPractices_ServiceProviders_v1.pdf) and ensure that you are following these best practices and that you meet the requirements listed above.
2. Complete the [Service Provider application form ](https://formstack.io/F45B4). After you complete the form, you will receive an automated email requesting that you electronically sign a PDF copy of the completed form. If you don’t receive the signature request email, please check your spam/junk folder.
3. DataCite staff will review your application and contact you within 2 weeks to schedule a verification call. If necessary, the DataCite board will be consulted.
4. During the verification call, you will be asked to demonstrate your integration and provide examples of findable DOIs that have been registered using your integration. This call will be recorded for DataCite internal use (with permission from those on the call).
5. If the application is approved, you will be listed on the DataCite website and receive the Service Providers badge.

To remain registered, Service Providers will be asked to re-register with DataCite once per year via a self-assessment form. No verification call is needed for re-registration.

If you have questions about the Service Providers program or the registration process, please contact [support@datacite.org](mailto:support@datacite.org).
