import { query } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction: boolean
) {
  // Buscar o usuário no banco do Fauna
  const userRef = await fauna.query(
    query.Select(
      "ref",
      query.Get(
        query.Match(query.Index("user_by_stripe_customer_id"), customerId)
      )
    )
  );

  // Buscar todos os dados das Subscription
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].id,
  };
  // Salvar os dados da Subscription no FaunaDB

  if (createAction) {
    await fauna.query(
      query.Create(query.Collection("subscriptions"), {
        data: subscriptionData,
      })
    );
  } else {
    await fauna.query(
      query.Replace(
        query.Select(
          "ref",
          query.Get(
            query.Match(query.Index("subscription_by_id"), subscription.id)
          )
        ),
        { data: subscriptionData }
      )
    );
  }
}
