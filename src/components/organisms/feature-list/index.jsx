import FeatureItem from "components/molecules/feature-item";
import featureIconEvent from "../../../assets/images/feature-icon-event.svg";
import featureIconRegistration from "../../../assets/images/feature-icon-registration.svg";
import featureIconBranded from "../../../assets/images/feature-icon-branded.svg";
import featureIconOrganiser from "../../../assets/images/feature-icon-organiser.svg";
import featureIconAttendee from "../../../assets/images/feature-icon-attendee.svg";
import featureIconAdd from "../../../assets/images/feature-icon-add.svg";

const FeatureList = () => {
  return (
    <div className="feature-list-section mt-50">
      <FeatureItem
        src={featureIconEvent}
        name="Event Metrics"
        content="Track your ticket sales, attendees count and more with much ease."
      />
      <FeatureItem
        src={featureIconRegistration}
        name="Registration & Ticketing"
        content="Manage your Event registrations and ticket sales easier and receive payments instantly."
      />
      <FeatureItem
        src={featureIconBranded}
        name="Branded Badges"
        content="Create your custom branded badges for your events and get them printed."
      />
      <FeatureItem
        src={featureIconOrganiser}
        name="Oragniser App"
        content="Manage your events at the palm of your hand with our Oragniser App."
      />
      <FeatureItem
        src={featureIconAttendee}
        name="Attendee Engagement"
        content="Engage with your attendees via email, surveys and much more."
      />
      <FeatureItem
        src={featureIconAdd}
        name="Add to Calendar"
        content="Effortless way to add your events to registered users calendars by 1-click."
      />
    </div>
  );
};

export default FeatureList;
